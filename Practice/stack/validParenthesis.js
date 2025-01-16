function isValid(str){
    let pairs ={"{":"}","(":")","[":"]"}
    let stack =[];
    let n = str.length;
    if(n%2===1)return false;
    if(str[0]===')' || str[0] ==="}" || str[0]==="]")return false;
    if(str[n-1]==='{' || str[n-1]==="(" || str[n-1]==='[')return false;
    for(let i=0; i<str.length;i++){
        if(str[i]==='{' || str[i]==="(" || str[i]==='['){
            stack.push(str[i])
        }else if(pairs[stack.pop()]!==str[i])return false;
    }
    return stack.length ===0;
    
}
let str1 ='{}{}[][))'
let str2 ='({{[]}})'
let str3 = '(){}[]'
let str4 = '[{{(])})}]'

console.log(isValid(str1));
console.log(isValid(str2));
console.log(isValid(str3));
console.log(isValid(str4));

function Valid(s){
    let pairs = {"(":")","{":"}","[":"]"}
    let stack1 = []
    let n = s.length;
    if(n%2===1)return false;
    if(s[0]===")" ||s[0]==="}" ||s[0]==="]")return false;
    if(s[n-1]==="(" ||s[n-1]==="{" ||s[n-1]==="[")return false;

    for(let i =0; i< s.length; i++){
        if(s[i]==="(" ||s[i]==="{" ||s[i]==="["){
            stack1.push(s[i]);
        }else if(pairs[stack1.pop()]!==s[i])return false;
    }
    return stack1.length ===0
    
}
console.log(Valid(str1));
console.log(Valid(str2));
console.log(Valid(str3));
console.log(Valid(str4));