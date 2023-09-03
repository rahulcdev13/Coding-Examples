// Natural number sum using for loop

const arr = [1,2,3,4,5,6,7,8,9,10];

function naturalSum(arr) {
    let sum =0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(naturalSum(arr));

// using reduce function [HOF]
const outout = arr.reduce(function(accumalor,current){
    accumalor = accumalor + current;
    return accumalor
})
console.log(outout);
