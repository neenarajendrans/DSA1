function reverseArrayAndDigits(arr) {
    // Reverse the array
    const reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArray.push(arr[i]);
    }
  
    // Reverse digits of each number
    for (let i = 0; i < reversedArray.length; i++) {
      let num = reversedArray[i];
      let reversedNum = 0;
      while (num !== 0) {
        const digit = num % 10; // Extract the last digit
        reversedNum = reversedNum * 10 + digit; // Build the reversed number
        num = Math.floor(num / 10); // Remove the last digit
      }
      reversedArray[i] = reversedNum;
    }
  
    return reversedArray;
  }
  
  // Usage
  const numbers = [123, 456, 789];
  const result = reverseArrayAndDigits(numbers);
  console.log(result); // Output: [987, 654, 321]
  