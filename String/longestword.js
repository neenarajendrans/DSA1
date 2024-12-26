function findLongestWord(s) {
    // Split the string into words
    let words = s.split(/\s+/);  // Split by spaces or multiple spaces
    let longestWord = '';
    
    // Iterate through each word to find the longest one
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    
    return longestWord;
}
