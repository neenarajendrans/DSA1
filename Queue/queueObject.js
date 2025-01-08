class Queue{
    constructor(){
        // when we use object just two pointer is enough and this is the optmised way to make a queue than using an array ( shift()method is used)
        this.item = {}
        this.front = 0;
        this.rear = 0;

    }
    enqueue(element){
        this.item[this.rear] = element; // here the rear pointer is used to make keys so the front pointer have no role while enqueueing.
        this.rear ++
    }
    dequeue(){
        const remove = this.item[this.front];
        delete this.item[this.front];
        this.front++;
        return remove;
    }
    peek(){
        return this.item[this.front]
    }
    isEmpty(){
        return this.rear - this.front ===0
    }
    size(){
        return this.rear - this.front
    }
    print(){
        console.log(this.item)
    }


}
const que = new Queue()
que.enqueue(1)
que.enqueue(2)
que.enqueue(3)
que.enqueue(4)
que.print()
//{ '0': 1, '1': 2, '2': 3, '3': 4 }