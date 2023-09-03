// using map function and reduce function
// Find all first name of less than 25 age using filter map reduce
// output : ["rahul","raju"]
const arr = [
  { fName: "rahul", lName: "chavan", age: "24" },
  { fName: "raju", lName: "chavan", age: "23" },
  { fName: "samat", lName: "chavan", age: "28" },
  { fName: "kishor", lName: "chavan", age: "25" },
  { fName: "harshdip", lName: "chavan", age: "27" },
];
console.log(arr);

const outout = arr.filter((item)=>item.age<25)
// .map((item)=>item.fName);
.reduce(function(acc,curr){
    if (curr.age<25) {
        acc.push(curr.fName)
    }
    return acc
},[])
  
console.log(outout);
