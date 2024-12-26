class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Linkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Print the list
    print() {
        if (!this.head) {
            return console.log("Empty");
        } else {
            let list = "";
            let curr = this.head;
            while (curr) {
                list += `${curr.value}-->`;
                curr = curr.next;
            }
            return console.log(list + "null");
        }
    }

    // Insert at the end (O(1) time)
    push(value) {
        const node = new Node(value);
        if (!this.head) { // If the list is empty
            this.head = node;
            this.tail = this.head;
        } else { // Add at the end
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    // Insert at the beginning (O(1) time)
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) { // If the list is empty
            this.head = newNode;
            this.tail = newNode; // Update the tail as well
        } else { // Add at the start
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    // Remove the first node (O(1) time)
    removenode() {
        if (!this.head) {
            return null; // If the list is empty
        } else {
            this.head = this.head.next; // Move the head to the next node
            this.size--;
        }
    }

    // Reverse the list (O(n) time)
    reverse() {
        let prev = null;
        let curr = this.head;
        let next = null;

        while (curr) {
            next = curr.next; // Store the next node
            curr.next = prev; // Reverse the pointer
            prev = curr;      // Move prev forward
            curr = next;      // Move curr forward
        }
        this.head = prev; // Update the head to the new first node
    }
}

// Example usage:
const newlist = new Linkedlist();

// Push elements to the list
newlist.push(1);
newlist.push(2);
newlist.push(3);
newlist.push(4);

console.log("Initial List:");
newlist.print(); // 1-->2-->3-->4-->null

// Reverse the list
console.log("Reversed List:");
newlist.reverse();
newlist.print(); // 4-->3-->2-->1-->null

// Add a node at the beginning
console.log("After Unshifting (Adding 10 at the start):");
newlist.unshift(10);
newlist.print(); // 10-->4-->3-->2-->1-->null

// Remove the first node
console.log("After Removing the First Node:");
newlist.removenode();
newlist.print(); // 4-->3-->2-->1-->null
