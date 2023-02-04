// implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues_mine(arr) {
  let first = 0;
  let second = 1;
  if (arr.length === 0) {
    return 0;
  }
  while (second < arr.length) {
    if (arr[first] !== arr[second]) {
      first++;
      arr[first] = arr[second];
      // console.log(arr);
    }
    second++;
  }
  console.log(first + 1);
  return first + 1;
}

function countUniqueValues_answer(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
