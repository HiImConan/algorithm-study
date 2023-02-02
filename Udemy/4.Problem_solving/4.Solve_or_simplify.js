function charCount(str) {
  const result = {};
  // make object to return at end
  for (let i = 0; i < str.length; i++) {
    // loop over string, for each character..
    const char = str[i].toLowerCase();
    if (result[char] > 0) {
      // if the char is a number/letter AND is a key in object, add one to count
      result[char]++;
    } else {
      // if the char is a number/letter AND not in object, add it and set value to 1
      result[char] = 1;
    }
    // if character is something else (space, period, etc.) don't do anything
  }
  return result;
  // return object at end
}
charCount("hello");
