class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
} 

class Linkedlist{
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
// Normal Insert- append - insert at the end of the an array.
//O(1)T
    insert(value){
        let node = new Node(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }
        else{

            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    print(){
        if(!this.head){
            return console.log(' Empty')
        }
        let current = this.head;
        let list = ''
        while(current){
            list += `${current.value}-->`
            current =current.next;
        }

        return console.log(list + null)
    }
//prepend- insert at the beginning of an array.
//O(1)T
    prepend(value){
        let node = new Node;
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

//Insert a value at a given index
    insertAtIndex(value,index){
        if(index<0 && index > this.size){
            return console.log("Invalid Index")
        }
        let node = new Node(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else if(index === 0){
            node.next = this.head;
            this.head = node;
        }else if(index === this.size){ // last element will be on this.size -1 and here the index= this.size this means we have to add the node after the last node.
            this.tail.next = node;
            this.tail = node;
        }else{
            let prev = this.head;
            for(let i =0;i<index-1;i++){
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;

        }
        this.size++;
    }

}

const l = new Linkedlist();
l.insert(1);
l.insert(2);
l.insert(3);
l.print();
//time complexity {O(1)S for all}
//Operation	                  Best Case Worst Case	      Explanation
// Insert at Beginning	      O(1)	    O(1)	          Directly update the head pointer.
// Insert at End	          O(1)	    O(1)	          Update tail pointer without traversal.
// Insert at Arbitrary Index  O(1)	    O(n)	          Traversal required to reach the index.
// Print List	              O(1)	    O(n)	          Traversal through all nodes to print.