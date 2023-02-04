// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

function same_naive(arr1, arr2) {
  // O(n^2)
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    // first loop
    let correctIndex = arr2.indexOf(arr1[i] ** 2); // indexOf() iterating entire array so nested-second loop
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

function same_refactored(arr1, arr2) {
  // O(n)
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    // first loop
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    // second but individual loop
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    // third and also individual loop
    if (!(key ** 2 in frequencyCounter2)) {
      // key check
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      // value check
      return false;
    }
  }
  return true;
}
