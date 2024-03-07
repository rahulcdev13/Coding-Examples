const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let min = Infinity;
let secondSmallest = Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    secondSmallest = min;
    min = arr[i];
  } else if (arr[i] > min && arr[i] < secondSmallest) {
    secondSmallest = arr[i];
  }
}

console.log("Second Smallest:", secondSmallest); // Output: 2
