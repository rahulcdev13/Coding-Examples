// find max number in array using for loop
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function maxNumber(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // 666
    }
  }
  return max;
}
console.log(maxNumber(arr));

// Find max number using hof reduce
const output1 = arr.reduce(function (accumalor, current) {
  if (current > accumalor) {
    accumalor = current;
  }
  return accumalor;
}, 0);
console.log(output1);
