class Stack{
    constructor(){
        this.stack =[];
        this.minstack = [];
        this.maxstack =[]
    }
    isEmpty(){
        return this.stack.length ===0
    }
    push(value){
        this.stack.push(value);
        if(this.minstack.length===0 || value<= this.minstack[this.minstack.length-1]){
            this.minstack.push(value)
        }
        if(this.maxstack.length===0 || value>= this.maxstack[this.maxstack.length-1] ){
            this.maxstack.push(value)
        }
        
    }
    pop(){
        if(!this.isEmpty()){
            let remove = this.stack.pop();
            if(remove === this.minstack[this.minstack.length-1]){
                this.minstack.pop(); 
            }
            if(remove === this.maxstack[this.maxstack.length-1]){
                this.maxstack.pop()
            }
            return remove;
        }
        return "Empty"
    }
    getmin(){
        if(this.minstack.length ===0){
            return "Empty stack"
        }else{
            return this.minstack[this.minstack.length-1]
        }
    }
    getmax(){
        if(this.maxstack.length===0){
            return "Stack is Empty"
        }else{
            return this.maxstack[this.maxstack.length-1]
        }
    }
}
let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(5);
console.log(stack.getmin()); // Should print 5
stack.pop();
console.log(stack.getmin()); // Should print 10 now
console.log(stack.getmax()); // Should print 20

