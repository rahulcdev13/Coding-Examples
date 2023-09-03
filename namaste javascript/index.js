// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map funtion
// const outout = arr.map(item=>item*3 ) multiple 3

// Filter function
// const outout = arr.filter(item=>item>=3 ) gretethan 3
// const outout = arr.filter(item=>item%2 ) odd number
// const outout = arr.filter(item=>item%2==0 ) // even number

//reduce funtion

// natural number sum using hof reduce
// const arr = [10, 20, 63, 24, 55, 666, 71, 88, 97, 10];

// function naturalSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(naturalSum(arr));

// // Using reduce
// const outout = arr.reduce(function (accumalor, current) {
//   accumalor = accumalor + current;
//   return accumalor;
// },0);
// console.log(outout);

// Find max number using hof reduce
// function maxNumber(arr) {
//     let max =0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]>max) {
//             max = arr[i] // 666
//         }
//     }
//     return max;
// }
// console.log(maxNumber(arr));

// const output1 = arr.reduce(function(accumalor,current){
//     if (current > accumalor) {
//         accumalor = current
//     }
//     return accumalor;
// },0);
// console.log(output1);

// const arr = [
//   { fName: "rahul", lName: "chavan", age: "24" },
//   { fName: "raju", lName: "chavan", age: "23" },
//   { fName: "samat", lName: "chavan", age: "28" },
//   { fName: "kishor", lName: "chavan", age: "25" },
//   { fName: "harshdip", lName: "chavan", age: "27" },
// ];
// console.log(arr);

// // using map function and reduce function
// // output : ["rahul","raju"]
// const outout = arr.filter((item)=>item.age<25)
// // .map((item)=>item.fName);
// .reduce(function(acc,curr){
//     if (curr.age<25) {
//         acc.push(curr.fName)
//     }
//     return acc
// },[])
  
// console.log(outout);

// const outout = arr.map((item)=>{
//   return  item.fName +" "+ item.lName +" "+ item.age
// })
// console.log(outout);

// using reduce function find number total
//output : {25:2,23:2,27:1}
// const outout = arr.reduce(function (accumalor, current) {
//   if (accumalor[current.age]) {
//     accumalor[current.age] = ++accumalor[current.age];
//   } else {
//     accumalor[current.age] = 1;
//   }
//   return accumalor;
// }, {});

// console.log(outout);
// =========================================================






























