class Stack{
    constructor(){
        this.stack =[];
        this.set = new Set();
    }
    push(value){
        if(this.set.has(value)){
            return "Already has this value";
        }else{
            this.set.add(value);
            this.stack.push(value)
        }
    }
    pop(){
       if(this.stack.length >0){
        let remove = this.stack.pop();
        this.set.delete(remove);
        return remove;
       }
       return "Empty stack"
    }
    print(){
        return this.stack
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.print()); // Output: [10, 20, 30]

console.log(stack.pop()); // Output: 30
console.log(stack.print()); // Output: [10, 20]

// console.log(stack.pop()); // Output: 20
// console.log(stack.pop()); // Output: 10
// console.log(stack.pop()); // Output: "Empty stack" 

console.log(stack.push(20)); // Output: "Already has this value"
