class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    print() {
        if (!this.head) {
            console.log("Empty");
            return;
        }
        let curr = this.head;
        let list = "";
        while (curr) {
            list += `${curr.value} --> `;
            curr = curr.next;
        }
        console.log(list + "null");
    }

    insert(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
     
    
}

function insection(list,long){

    if(!list || !long){
       return null;
    }
    let pointA = list;
    let pointB = long;
    while(pointA !== pointB){ // at intersection it is need to come out
        if(pointA === null){
            pointA = headB
        }else{
            pointA= pointA.next
        }
        if(pointB === null){
            pointB = headA;
        }else{
            pointB = pointB.next;
        }
    }
return pointA
}


function inter(head1, head2){
    let p1 = head1;
    let p2 = head2;

    if(!head1 || !head2){
        return null
    }
    while(p1 !== p2){
        if(p1 === null){
            p1= head2;
        }else{
            p1 = p1.next;
        }
        if(p2 === null){
            p2= head1;
        }else{
            p2= p2.next;
        }
    }
    return p1;
}



function findIntersection(head1, head2) {
    if (!head1 || !head2) {
        return null; // If either list is empty, there's no intersection
    }

    let p1 = head1;
    let p2 = head2;

    // Traverse until the two pointers meet or both are null
    while (p1 !== p2) {
        // If p1 reaches the end of its list, switch to the head of the other list
        p1 = p1 === null ? head2 : p1.next;
        // If p2 reaches the end of its list, switch to the head of the other list
        p2 = p2 === null ? head1 : p2.next;
    }

    // Either they meet at the intersection or both become null (no intersection)
    return p1;
}
const list1 = new LinkedList();
list1.insert(1);
list1.insert(2);
list1.insert(3);

const list2 = new LinkedList();
list2.insert(9);

// Create an intersection manually
const intersectionNode = new Node(4);
list1.tail.next = intersectionNode;
list1.tail = intersectionNode;
list2.head.next = intersectionNode;

list1.tail.next = new Node(5); // Add remaining part of the list
list1.tail = list1.tail.next;

// Find the intersection
const intersectNode = findIntersection(list1.head, list2.head);
if (intersectNode) {
    console.log("Intersection at node with value:", intersectNode.value);
} else {
    console.log("No intersection.");
}


// Time & Space complexities

//O(m + n)T time will depend upon the n and m which are the length of two list.
//O(1)S
