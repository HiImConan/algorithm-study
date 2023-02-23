import pivot from "./1.Pivot_helper";

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr.pivotIndex + 1, right);
  }
  return arr;
}

quickSort([3, 100, 4, 6, 8, 4, 3, 2, 1, 7, 77, 43]);
