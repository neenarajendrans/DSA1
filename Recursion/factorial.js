function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;  // Base case
    }
    return n * factorial(n - 1);  // Recursive case
}

// Example Usage:
console.log(factorial(5));  // Output: 120
console.log(factorial(0));  // Output: 1
console.log(factorial(7));  // Output: 5040
