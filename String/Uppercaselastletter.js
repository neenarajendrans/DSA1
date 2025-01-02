// function capitalizeLastLetterOfWords(sentence) {
//     return sentence.split(' ').map(word => {
//         if (word.length > 0) {
//             const lastChar = word[word.length - 1].toUpperCase();  // Convert last char to uppercase
//             return word.slice(0, -1) + lastChar;  // Keep the rest of the word and append the uppercase last char
//         }
//         return word;  // In case of empty word (like multiple spaces), return as is
//     }).join(' ');
// }
// console.log(capitalizeLastLetterOfWords("hello world"));  // Output: "hellO worlD"
// console.log(capitalizeLastLetterOfWords("javascript is fun"));  // Output: "javascripT is fuN"


function capitalizeLastLetterOfWords(s){
    return s.split(" ").map(word=>{
        if(word.length>0){
            const lastChar = word[word.length-1].toUpperCase();
            return word.slice(0,-1)+lastChar;
        }
        return word;
    }).join(' ')
}