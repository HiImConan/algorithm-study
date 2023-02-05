// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

function sameFrequency(int1, int2) {
  const str1 = String(int1);
  const str2 = String(int2);
  if (str1.length !== str2.length) return false;
  const freqCount1 = {};
  for (let val of str1) {
    freqCount1[val] = freqCount1[val] ? freqCount1[val]++ : 1;
  }
  for (let val of str2) {
    if (val in freqCount1) {
      freqCount1[val]--;
    } else {
      return false;
    }
  }
  return true;
}

// sameFrequency(182, 281); // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false
