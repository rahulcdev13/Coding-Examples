function removeDuplicateNumber(arr) {
    const frequencyMap = {};
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
    
    const nonDuplicates = [];
    for (const key in frequencyMap) {
      if (frequencyMap[key] === 1) {
        nonDuplicates.push(parseInt(key));
      }
    }
    
    return nonDuplicates;
  }
  
  const arr = [1, 2, 3, 6, 5, 4, 1, 2, 3];
  console.log(removeDuplicateNumber(arr)); // Output: [ 6, 5, 4 ]
  