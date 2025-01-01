function removeVowels (str){
    return str.replace(/[aeiouAEIOU]/g, '')
}
console.log(removeVowels('hello, dear vowels'));
