function findLongestWord(s) {
    // Split the string into words
    let words = s.split(/\s+/);  // or  s.split(" ") Split by spaces or multiple spaces
    let longestWord = '';
    
    // Iterate through each word to find the longest one
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    
    return longestWord;
}
 console.log(findLongestWord('hi my   name is neena'));
 

