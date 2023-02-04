// Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.
// Very efficient for solving problems with minimal space complexity as well
// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist

function sumZero_naive(arr) {
  // Time Complexity - O(n^2), Space Complexity - O(1)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

function sumZero_refactored(arr) {
  // Time Complexity - O(n), Space Complexity - O(1)
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
