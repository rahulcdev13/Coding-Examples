// Function to reverse a string
function reverseWords(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  const reverseString = "rahul is name my hello"; 
  console.log(reverseWords(reverseString)); // Output: "luhar si eman ym olleh" 
  