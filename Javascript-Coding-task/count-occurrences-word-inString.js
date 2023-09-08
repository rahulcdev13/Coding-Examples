// example of how you can count the occurrences of 'a' in the string "Rahul ChAvan":s

const str = "Rahul ChAvan";
let charName = "a"
let count =0;
for(i=0; i<str.length;i++){
    if(str[i].toLowerCase() === charName.toLowerCase()){
    count++;    
    }
}
console.log(`${charName} : ${count}`)

