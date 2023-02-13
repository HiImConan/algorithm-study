// ver.1
function solution(a) {
  let answer = a.length;

  let left = 0;
  let minLeft = a[left];
  let right = answer - 1;
  let minRight = a[right];

  while (right - left > 1) {
    const leftOrRight = minLeft > minRight;
    leftOrRight ? left++ : right--;

    let target = a[leftOrRight ? left : right];
    let [isLeftBig, isRightBig] = [target > minLeft, target > minRight];
    if (isLeftBig && isRightBig) answer--;
    if (!isLeftBig && leftOrRight) minLeft = target;
    if (!isRightBig && !leftOrRight) minRight = target;
  }

  return answer;
}

// ver.2
function solution(a) {
  let ans = 0;

  for (let min = Infinity, i = 0; i < a.length; i++) {
    if (a[i] < min) {
      ans += 1;
      min = a[i];
    }
  }

  for (let min = Infinity, i = a.length - 1; i >= 0; i--) {
    if (a[i] < min) {
      ans += 1;
      min = a[i];
    }
  }

  return ans - 1;
}
