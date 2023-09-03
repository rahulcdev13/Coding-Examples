function findDuplicates(arr) {
  return arr.filter((value, index, self) => self.indexOf(value) !== index);
}

const myArray = [1, 2, 2, 3, 4, 4, 5];
const duplicates = findDuplicates(myArray);
console.log(duplicates); // Output: [2, 4]