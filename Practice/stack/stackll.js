class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
    
}
class Linkedlist{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0
    }
    push(value){
        let node = new Node(value)
        if(!this.head){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    pop(){
        if(!this.head){
            return "Empty"
        }else{
            let remove = this.head.value;
            this.head = this.head.next;
            this.size--;
            return remove;
            
        }
    }
    print(){
        if(!this.head){
            return "Empty"

        }else{
            let list = ''
            let curr = this.head;
            while(curr){
                list += `${curr.value}-->`
                curr= curr.next;
            }
            return list;
            
        }
    }
}
class Stack{
    constructor(){
        this.list1 = new Linkedlist()
    }
    push(value){
        this.list1.push(value)
    }
    pop(){
        return this.list1.pop()
    }
    isEmpty(){
        return this.list1.isEmpty()
    }
    display(){
        return console.log(this.list1.print());
        
    }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.display(); // Should print "30-->20-->10-->null"
console.log(stack.pop()); // Should print 30
stack.display(); // Should print "20-->10-->null"
console.log(stack.isEmpty()); // Should print false
