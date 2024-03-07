const str = "hello my name is rahul ";

function reverseWords(str) {
  const words = str.split(" ");
  let reversed = "";
  for (let i = words.length - 1; i >= 0; i--) {
    reversed += words[i] + " ";
  }
  return reversed.trim(); // Trim to remove the trailing space
}

const reversedString = reverseWords(str);
console.log(reversedString); // Output: "rahul is name my hello"
