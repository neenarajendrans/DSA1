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
    }
    print(){
        if(!this.head){
            return null;
        }
        let curr = this.head;
        let list = ""
        while(curr){
            list +=`${curr.value}-->`;
            curr = curr.next;
        }
        return console.log(list)
    }
    insert(value){
        let node = new Node(value);
        if(!this.head ){
            this.head = node;
            this.tail = node;    
        }
        else{
            this.tail.next = node;
            this.tail = node;
        }

    }

}
function instersection(headA,headB){
    let pointA = headA;
    let pointB = headB;
    while(pointA !== pointB){
        pointA = pointA === null? headB : pointA.next;
        pointB = pointB === null? headA : pointB.next;
    }
    return pointA;
}

const list1 = new Linkedlist()
const list2 = new Linkedlist()
list1.insert(1);
list1.insert(2);
list1.insert(3);
list1.insert(4);
list2.insert(5);
list2.insert(6);
list2.insert(7);
list2.insert(8);
list2.insert(9);
list1.print();
list2.print()

