let str = "i am rahul";

let reversedWords = str.split(' ').map(word => {
    return word.split('').reverse().join('');
});

let result = reversedWords.join(' ');

console.log(result); // Output: "i ma luhar"
