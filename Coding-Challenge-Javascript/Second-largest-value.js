const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let max = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    secondLargest = max;
    max = arr[i];
  } else if (arr[i] < max && arr[i] > secondLargest) {
    secondLargest = arr[i];
  }
}
console.log("Second Largest:", secondLargest); // Output: 9
