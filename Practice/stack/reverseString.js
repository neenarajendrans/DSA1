function reverse(s){
    let stack = [];
    let reversed = ''
    for(let i=0; i<s.length;i++){
        stack.push(s[i])
    }
    while(stack.length>0){
        reversed += stack.pop()
    }
    return reversed;
}
console.log(reverse('hello'));
