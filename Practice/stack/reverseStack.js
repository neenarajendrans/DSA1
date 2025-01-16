class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        if (this.stack.length > 0) {
            let remove = this.stack.pop();
            return remove;
        }
        return "Stack is Empty";
    }
    isEmpty() {
        return this.stack.length === 0;
    }
}
// stack reversed fully
function reverse(s){
    let helper = new Stack();
    let helper1 = new Stack();
    while(!s.isEmpty()){
        helper.push(s.pop())
    }
    while(!helper.isEmpty()){
        helper1.push(helper.pop())
    }
    while(!helper1.isEmpty()){
        s.push(helper1.pop())
    }
    return s;
}
function reverseStr(s){
    let stack = new Stack();
    let reversed = ''
    for(let i=0; i<s.length;i++){
        stack.push(s[i])
    }
    while(!stack.isEmpty()){
        reversed += stack.pop()
    }
    return reversed;
}
function reverseAll(a){
    let reversed = []
    
    for(let i= a.length-1; i>=0; i--){
        
      reversed.push(a[i])

    }
    
    return reversed;
}
// reversing elements but original stack become empty.
// function justReverse(s){
//     let h = new Stack()
//     while(!s.isEmpty()){
//         h.push(s.pop())
//     }
//     return h;
// }

// Create and test the stack
let OStack = new Stack();
OStack.push(10);
OStack.push(20);
OStack.push(30);
OStack.push(40);
console.log(OStack)
console.log(reverse(OStack));
console.log(OStack)
console.log(reverseStr("Hello"));
let a = [123, 998, 1937]
console.log(reverseAll(a));




