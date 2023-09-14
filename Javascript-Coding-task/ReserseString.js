// 1. Reverse a String With Built-In Functions
function reverseString(str) {
    var splitString = str.split(""); // ["h", "e", "l", "l", "o"]
    var reverseArray = splitString.reverse(); // ["o", "l", "l", "e", "h"]
    var joinArray = reverseArray.join(""); // "olleh"
    console.log(joinArray); // "olleh"
}
reverseString("hello");

// 2. Reverse a String With a Decrementing For Loop
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log(newString);
}
reverseString('hello'); 