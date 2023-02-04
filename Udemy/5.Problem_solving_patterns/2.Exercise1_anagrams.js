// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(str1, str2) {
  // O(3n)
  // compare the strings' length
  if (str1.length !== str2.length) {
    return false;
  }
  // step 1. split string into alphabets by keys and values
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // step 2. compare the frequencies of alphabets between two objects
  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
    if (!(key in frequencyCounter2)) {
      return false;
    }
  }
  return true;
}

validAnagram("anagram", "nagaram");

function validAnagram(first, second) {
  // O(2n)
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      // when encounter zero value or not exists means that letter from second isn't exist in first.
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
