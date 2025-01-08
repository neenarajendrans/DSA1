class Queue{
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        this.items.shift()
    }
    isEmpty(){
        return this.items.length ===0;
    }
    peek(){
        if(!isEmtpy){
            return this.items[0]
        }
        return null
    }
    size(){
        return this.items.length
    }
    print(){
        return console.log(this.items.toString())
    }
}
const que = new Queue();
que.enqueue(1)
que.enqueue(2)
que.enqueue(3)
que.enqueue(4)
que.print()