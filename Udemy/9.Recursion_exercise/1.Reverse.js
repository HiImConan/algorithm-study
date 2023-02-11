function reverse(str) {
  let reversedStr = str.slice(-1);
  if (str.length === 1) return str;
  return reversedStr + reverse(str.slice(0, -1));
}

reverse("awesome"); // 'emosewa'
