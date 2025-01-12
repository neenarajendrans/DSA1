function isAnagram(s, t) {
    // If lengths are different, not an anagram
    if (s.length !== t.length) return false;

    // Create a frequency map for the first string
    const charCount = {};

    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Subtract character counts using the second string
    for (const char of t) {
        if (!charCount[char]) {
            return false; // Either char doesn't exist or count is zero
        }
        charCount[char] -= 1;
    }

    // Check if all counts are zero
    return Object.values(charCount).every(count => count === 0);
}
