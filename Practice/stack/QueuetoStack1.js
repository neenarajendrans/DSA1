class Stack{
    constructor(){
        this.queue=[]
    }
    isEmpty(){
        return this.queue.length ===0
    }
    push(value){
        let size = this.queue.length;
        this.queue.push(value);
        for(let i=0; i<size; i++){
            this.queue.push(this.queue.shift())
        }
    }
    pop(){
        if(!this.isEmpty()){
            return this.queue.shift();
        }
        return "Stack is Empty"
        
    }
    peek(){
        if(!this.isEmpty()){
            return this.queue[0]
        }
        return 'Stack is Empty'
    }
    display(){
        return [...this.queue]
    }
  
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); // Output: 30
console.log(stack.display()); // Output: [30, 20, 10]
console.log(stack.pop()); // Output: 30
console.log(stack.display()); // Output: [20, 10]