// Find how many age repeat and total 
const arr = [
  { fName: "rahul", lName: "chavan", age: "25" },
  { fName: "samat", lName: "chavan", age: "23" },
  { fName: "raju", lName: "chavan", age: "23" },
  { fName: "kishor", lName: "chavan", age: "25" },
  { fName: "harshdip", lName: "chavan", age: "27" },
];

const output = arr.reduce(function(accumulator, current) {
    accumulator[current.age] = (accumulator[current.age] || 0) + 1;
    return accumulator;
}, {});

console.log(output); // Output: { '23': 2, '25': 2, '27': 1 }
