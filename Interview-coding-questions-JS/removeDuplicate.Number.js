function removeDuplicateNumber(arr){
    let duplicateNum = [];
    for(let i=0; i<arr.length; i++){ 
        if(duplicateNum.indexOf(arr[i])===-1){
            duplicateNum.push(arr[i])
        }
    }
    return duplicateNum;
}
const arr = [1,2,3,6,5,4,1,2,3]
console.log(removeDuplicateNumber(arr));