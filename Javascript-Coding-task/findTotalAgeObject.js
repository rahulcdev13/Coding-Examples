// Find how many age repeat and total 
const arr = [
  { fName: "rahul", lName: "chavan", age: "25" },
  { fName: "samat", lName: "chavan", age: "23" },
  { fName: "raju", lName: "chavan", age: "23" },
  { fName: "kishor", lName: "chavan", age: "25" },
  { fName: "harshdip", lName: "chavan", age: "27" },
];
console.log(arr);

// output : {25:2,23:2,27:1}

const outout = arr.reduce(function (accumalor, current) {
  if (accumalor[current.age]) {
    accumalor[current.age] = ++accumalor[current.age];
  } else {
    accumalor[current.age] = 1;
  }
  return accumalor;
}, {});

console.log(outout);