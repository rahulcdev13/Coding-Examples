function findDuplicateNumber(arr){
    let duplicateNum = [];
    for(let i=0; i<arr.length; i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]=== arr[j] && !duplicateNum.includes(arr[i])){
            duplicateNum.push(arr[i])
        }
        } 
    } 
    return duplicateNum;
} 
const arr = [1,2,3,6,5,4,2,1,5] 
console.log(findDuplicateNumber(arr));