function countCharacterOccurrences(str) {
    // Initialize an empty object to store character counts
    const charCount = {};

    // Loop through each character in the string
    for (let char of str) {
        // If the character is already in the object, increment its count
        if (charCount[char]) {
            charCount[char]++;
        } else {
            // Otherwise, add the character to the object with a count of 1
            charCount[char] = 1;
        }
    }

    // Return the object with character counts
    return charCount;
}

// Example usage
const inputString = "hello world";
const result = countCharacterOccurrences(inputString);
console.log(result);

// Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
