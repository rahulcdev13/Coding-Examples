const str = "hello my name is rahul ";

function reverseWords(str) {
  const strs = str.split(" ");
  let reversed = "";
  for (let i = strs.length - 1; i >= 0; i--) {
    reversed += strs[i] + " ";
  }
  return reversed.trim(); // Trim to remove the trailing space
}

const reversedString = reverseWords(str);
console.log(reversedString); // Output: "rahul is name my hello"
