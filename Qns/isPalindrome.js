function ispalindrome(s){
    let stack =[]
    let str = s.toLowerCase();
    let reversed = ''
    for(let char of str){
        stack.push(char)
    }
    while(stack.length>0){
        reversed += stack.pop()
    }
    return reversed ===str
}
let s= "Malayalam"
let st= "hello"
console.log(ispalindrome(s));
console.log(ispalindrome(st));
