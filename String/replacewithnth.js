function replaceWithNthAlphabet(str, n) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) {
            const isUpperCase = char === char.toUpperCase();
            const lowerChar = char.toLowerCase();
            const index = alphabet.indexOf(lowerChar);
            const newIndex = (index + n) % 26;  // Wrap around if needed
            const newChar = alphabet[newIndex];

            result += isUpperCase ? newChar.toUpperCase() : newChar;
        } else {
            result += char;  // If not an alphabet, keep the character as is
        }
    }

    return result;
}

// Example usage
const inputString = "Hello, World!";
const n = 3; // Shift by 3 positions
const outputString = replaceWithNthAlphabet(inputString, n);

console.log(outputString);  // Output: "Khoor, Zruog!"
