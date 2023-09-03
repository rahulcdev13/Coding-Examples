function findDuplicates(arr) {
  const uniqueValues = new Set();
  const duplicates = [];

  for (const item of arr) {
    if (uniqueValues.has(item)) {
      duplicates.push(item);
    } else {
      uniqueValues.add(item);
    }
  }
  return duplicates;
}

const myArray = [1, 2, 2, 3, 4, 4, 5];
const duplicates = findDuplicates(myArray);
console.log(duplicates); // Output: [2, 4]
