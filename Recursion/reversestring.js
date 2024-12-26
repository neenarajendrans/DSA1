function reverseString(str) {
    if (str.length === 0) {
        return '';  // Base case: If the string is empty, return an empty string
    }
    return reverseString(str.slice(1)) + str[0];  // Recursive step: reverse the rest and append the first character
}
console.log(reverseString("hello"));  // Output: "olleh"
console.log(reverseString("JavaScript"));  // Output: "tpircSavaJ"
