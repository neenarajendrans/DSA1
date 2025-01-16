class Stack{
    constructor (){
        this.items = {};
        this.head = 0
    }
    isEmpty(){
        return this.head ===0;
    }
    push(value){
        this.items[this.head]= value;
        this.head ++;
    }
    pop(){
        if(!this.isEmpty()){
            let remove = this.items[this.head-1];
            delete this.items[this.head-1];
            this.head--;
            return remove;
        }
        return undefined;

    }
    peek(){
        if(!this.isEmpty()){
            return this.items[this.head-1]
        }
        return undefined;
    }
    
    size(){
        return this.head;
    }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.size()); // Output: 3
console.log(stack.peek()); // Output: 30
console.log(stack.pop());  // Output: 30
console.log(stack.size()); // Output: 2
console.log(stack.pop());  // Output: 20
console.log(stack.pop());  // Output: 10
console.log(stack.pop());  // Output: undefined
console.log(stack.isEmpty()); // Output: true
