class Queue{
    constructor(){
        this.stack1 =[];
        this.stack2 =[];
    }
    push(value){
        return this.stack1.push(value)
    }
    pop(){
        if(this.stack2.length === 0){
            while(this.stack1>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }
    peek(){
        if(this.stack2.length === 0){
            while(this.stack1>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2[this.stack2.length-1]
    }
    isEmpty(){
        if(this.stack1.length === 0 && this.stack2.length ===0)
            return true;
    }
}