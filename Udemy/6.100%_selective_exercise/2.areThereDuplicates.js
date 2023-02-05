// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Restrictions:
// Time - O(n)
// Space - O(n)

// Bonus:
// Time - O(n log n)
// Space - O(1)

function areThereDuplicates(...args) {
  // 문제의 보기에는 숫자뿐만 아니라 문자열도 매개변수로 들어오고 있음. 다중 포인터로 풀려면 매개변수가 정렬되어야 하는데 문자열을 어떻게 정렬?
  // -> array.prototype.sort([compareFunction]): 각 요소의 유니코드 코드 포인트 값에 따라 정렬.
  args.sort();
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

function areThereDuplicates_oneline() {
  // Set() 메소드로도 정렬 가능.
  return new Set(arguments).size !== arguments.length;
}

areThereDuplicates(1, 2, 3); // false
// areThereDuplicates(1, 2, 2) // true
areThereDuplicates("a", "b", "c", "a"); // true
