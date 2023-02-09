// Base case: The condition when recursive ends.

function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(3);

// Can you spot the base case?
// Do you notice the different input?
// What would happen if we didn't return?

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

sumRange(3);
