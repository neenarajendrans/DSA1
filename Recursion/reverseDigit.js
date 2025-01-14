function reverseNumberRecursive(num, reversed = 0) {
    // Base case: when the number becomes 0
    if (num === 0) {
      return reversed;
    }
  
    // Recursive case: extract the last digit and build the reversed number
    const digit = num % 10;
    reversed = reversed * 10 + digit;
  
    // Call the function with the remaining number
    return reverseNumberRecursive(Math.floor(num / 10), reversed);
  }
  
  // Example Usage
  const number = 12345;
  const reversedNumber = reverseNumberRecursive(number);
  console.log(reversedNumber); // Output: 54321
  