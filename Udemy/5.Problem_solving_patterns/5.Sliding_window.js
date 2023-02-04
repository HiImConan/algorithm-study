// This pattern involves creating a window which can either be an array or number from one position to another. Depending on a certain condition, the window either increases or closes(and a new window is created). Very useful for keeping track of a subset of data in an array/string etc.
// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum_naive(arr, num) {
  // time complexity - O(n^2)
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

function maxSubarraySum_refactored(arr, num) {
  // time complexity - O(n)
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < arr.length; i++) {
    // don't need to add whole numbers individually, just subtract the first num and add the new num.
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
