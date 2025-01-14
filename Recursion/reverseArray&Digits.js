function reverseNumberRecursive(num, reversed = 0) {
    if (num === 0) {
      return reversed;
    }
    const digit = num % 10;
    reversed = reversed * 10 + digit;
    return reverseNumberRecursive(Math.floor(num / 10), reversed);
  }
  
  function reverseArrayAndDigitsRecursive(arr, index = arr.length - 1, result = []) {
    // Base case: when the array is fully processed
    if (index < 0) {
      return result;
    }
  
    // Reverse the current number and add to the result
    const reversedNum = reverseNumberRecursive(arr[index]);
    result.push(reversedNum);
  
    // Recursive call for the next element
    return reverseArrayAndDigitsRecursive(arr, index - 1, result);
  }
  
  // Example Usage
  const numbers = [123, 456, 789];
  const reversedArray = reverseArrayAndDigitsRecursive(numbers);
  console.log(reversedArray); // Output: [987, 654, 321]
  