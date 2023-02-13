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