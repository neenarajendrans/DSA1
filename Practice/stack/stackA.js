class Stack {
    constructor(){
        this.items = []
    }
    isEmpty(){
        return this.items.length ===0;

    }
    push(value){
        this.items.push(value)
    }
    pop(){
        if(!this.isEmpty()){
            return this.items.pop()
        }
        return undefined;
    }
    display(){
        console.log(this.items)
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[this.items.length-1]
        }
        return undefined;
    }
    size(){
        return this.items.length;
    }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.display(); // Output: [10, 20, 30]
console.log(stack.pop()); // Output: 30
stack.display(); // Output: [10, 20]
console.log(stack.pop()); // Output: 20
console.log(stack.pop()); // Output: 10
console.log(stack.pop()); // Output: undefined