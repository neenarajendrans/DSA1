class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Linkedlist {
 constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
 }
 prepend(value){
    let node = new Node(value);
    if(!this.head){
        this.head = node;
        this.tail = node;
    }else{
        node.next = this.head;
        this.head = node;
    }
    this.size++;
 }
 append(value){
    let node = new Node(value);
    if(!this.head){
        this.head = node;
        this.tail = node;
    }else{
    this.tail.next = node;
    this.tail = node;
    
    }
    this.size++;
 }

 print(){
    let list = '';
    let current = this.head;
    if(!this.head){
        return null;
    }
    while(current){
        list += `${current.value}-->`
        current = current.next
    }
    return console.log(list + null)
 }
 removefromFront(){
    if(!this.head){
        return null;
    }
    let remove = this.head;
    this.head = remove.next;
    this.size--;
 }
 isEmpty(){
    return this.size === 0;
 }
}

const list = new Linkedlist();
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.print()
list.removefromFront()
list.print()
list.prepend(4)
list.print()

class Queue{
    constructor(){
        this.list = new Linkedlist()
    }
    enqueue(value){
        this.list.append(value)
    }
    dequeue(){
        this.list.removefromFront()
    }
    peek(){
        return this.list.head.value;
    }
    print(){
        console.log(this.list)
    }
}

let que = new Queue()
que.enqueue(23);
que.enqueue(24);
que.enqueue(25);
que.dequeue()
que.print()

