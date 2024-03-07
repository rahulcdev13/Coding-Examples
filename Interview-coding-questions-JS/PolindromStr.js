function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const len = cleanStr.length;
    
    for (let i = 0; i < len / 2; i++) {
      if (cleanStr[i] !== cleanStr[len - 1 - i]) {
        return false;
      }
    }
    
    return true;
  }
  
  // Test the function
  const testString = "A man, a plan, a canal, Panama";
  console.log(isPalindrome(testString)); // Output: true
  