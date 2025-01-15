class CircularQueue{
    constructor(capacity){
        this.items = new Array(capacity);
        this.rear = -1;
        this.front = -1;
        this.currentlength =0;
        this.capacity = capacity;

    }

    isEmpty(){
        return this.currentlength ===0;
    }
    isFull(){
        return this.currentlength === this.capacity;
    }
    enqueue(value){
        if(!this.isFull()){
            this.rear = (this.rear +1) % this.capacity;
            this.items[this.rear]= value;
            this.currentlength +=1;
            if(this.front === -1){
                this.front = this.rear;
            }
        }
    }
    dequeue(){
        if(this.isEmpty()) return null;
        let remove = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front+1)% this.capacity;
        this.currentlength -= 1;
        if(this.isEmpty()){
            this.front = -1;
            this.rear = -1;
               
        }
        return remove;
    }
    peek(){
        if(!this.isEmpty()){
        return this.items[this.front]
    }
    return null;
    }
    size(){
        return this.currentlength;
    }
    print(){
        if(this.isEmpty()){
            return console.log("Queue is empty")
        }else{
            let i;
            let str = ''
            for(i=this.front; i !== this.rear ; i = (i+1)% this.capacity){
                str+= this.items[i]+" "
            }
            str += this.items[i];
            console.log(str)
        }
    }
}
const queue = new CircularQueue(5);
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.size());
queue.print();
console.log(queue.isFull());
console.log(queue.dequeue());
console.log(queue.peek());
queue.print();