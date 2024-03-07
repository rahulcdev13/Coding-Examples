let arr = [1, 2, 3, 2, 3, 4, 5, 1, 3];
let frequency = {};

for (let i = 0; i < arr.length; i++) {
  let element = arr[i];
  frequency[element] = (frequency[element] || 0) + 1;
}

console.log(frequency);
