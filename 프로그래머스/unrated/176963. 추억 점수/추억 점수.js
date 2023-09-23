function solution(name, yearning, photo) {
    let yearningList = {};
    let answer = [];
    for (let i = 0; i < yearning.length; i++) {
        yearningList[name[i]] = yearning[i];
    }
    for (let eachPhoto of photo) {
        let yearningPoint = 0;
        for (const name of eachPhoto) {
            if (name in yearningList) {
                // console.log(yearningList[name]);
                yearningPoint += yearningList[name];
            }
        }
        // console.log(yearningPoint);
        answer.push(yearningPoint);
    }
    // console.log(answer)
    return answer
}