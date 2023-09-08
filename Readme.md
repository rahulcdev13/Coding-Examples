## Q.Three type os create array :
1. Normal way
   - const arr = [1,2,3]
2. using constructor
   - const arr = new Array(1,2,3,4)
3. using from method
   - const arr = Array.from({length:5},( ,index)=>index+1);
----------------------------------------------------------
## Q.Convert string to Array :
const arr = "rahul sureshrao chavan";
const newArr = Array.from(arr);
console.log(newArr) 