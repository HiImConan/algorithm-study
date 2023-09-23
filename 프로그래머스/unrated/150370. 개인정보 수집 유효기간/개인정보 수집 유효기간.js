function solution(today, terms, privacies) {
  // today의 month에 terms에 해당하는 달 수를 더하고 12로 나눔. 몫은 연도에 더하고, 나머지는 month에 할당, day는 -1
  // 만약 day - 1 이 0이면 month - 1, day = 28로 바꿔야 함.
  // 만약 month - 1이 0이면 year - 1, month = 12로 바꿔야 함.

  // 이렇게 해서 각 privacy에 해당하는 expireDay를 만들고 난 뒤 오늘과 비교
  // 대소비교: 1. year 비교 -> 같을 경우 2. month 비교 -> 같을 경우 3. day 비교 -> 같거나 클 때 보류. 작을 때 파기
  function toNumDate(today) {
    let arr = today.split(".");
    return arr.map((e) => +e);
  }

  function getLastDay(terms, privacies) {
    return privacies.map((privacy) => {
      let [date, pType] = privacy.split(" ");

      const validMonth = terms
        .find((term) => term.split(" ")[0] == pType)
        .split(" ")[1];

      let [year, month, day] = toNumDate(date);
      month += +validMonth;
      if (month > 12) {
        if (month % 12 == 0) {
          year += Math.floor(month / 12) - 1;
          month = 12;
        } else {
          year += Math.floor(month / 12);
          month %= 12;
        }
      }
      {
        day == 1
          ? month == 1
            ? (privacy = [year - 1, 12, 28])
            : (privacy = [year, month - 1, 28])
          : (privacy = [year, month, day - 1]);
      }
      return privacy;
    });
  }

  const expireDays = getLastDay(terms, privacies);
  today = toNumDate(today);
  let answer = [];

  for (let i = 0; i < expireDays.length; i++) {
    if (expireDays[i][0] > today[0]) continue; // 내년이면 바로 넘겨버려
    if (expireDays[i][0] < today[0]) answer.push(i + 1);// 작년일 땐 바로 추가
    else {
      // 올해면 달 비교로 넘어감
      if (expireDays[i][1] > today[1]) continue;
      if (expireDays[i][1] < today[1]) answer.push(i + 1);
      else {
        // 연도와 달이 같다면
        if (expireDays[i][2] >= today[2]) continue; // 파기일이 오늘까지면 보관 가능
        else answer.push(i + 1);
      }
    }
    // console.log(answer)
  }
  return answer;
}