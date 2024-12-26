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

    // Insert a value at a given index
    insert(value, index = this.size) {
        const node = new Node(value);
        if (index < 0 || index > this.size) {
            return console.log("Invalid index");
        }

        if (!this.head) { // If the list is empty
            this.head = node;
            this.tail = node;
        } else if (index === 0) { // Insert at the beginning
            node.next = this.head;
            this.head = node;
        } else if (index === this.size) { // Insert at the end
            this.tail.next = node;
            this.tail = node;
        } else { // Insert in the middle
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
        }
        this.size++;
    }

    // Remove a node at a given index
    removeindex(index) {
        if (!this.head) {
            return console.log("List is empty");
        }
        if (index < 0 || index >= this.size) {
            return console.log("Invalid index");
        }

        if (index === 0) { // Remove the head
            this.head = this.head.next;
            if (this.size === 1) {
                this.tail = null; // Update tail if it was the only node
            }
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            let removenode = prev.next;
            prev.next = removenode.next;

            if (index === this.size - 1) {
                this.tail = prev; // Update tail if the last node was removed
            }
        }
        this.size--;
    }

    // Remove a node by value
    removevalue(value) {
        if (!this.head) {
            return console.log("List is empty");
        }

        if (this.head.value === value) { // If the head is to be removed
            this.head = this.head.next;
            if (this.size === 1) {
                this.tail = null; // Update tail if it was the only node
            }
            this.size--;
            return value;
        } else {
            let prev = this.head;
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }

            if (prev.next) { // Value found
                let remove = prev.next;
                prev.next = remove.next;

                if (!prev.next) { // Update tail if the last node was removed
                    this.tail = prev;
                }

                this.size--;
                return value;
            } else {
                console.log("Value not found");
                return null;
            }
        }
    }
}

// Example usage
const n = new Linkedlist();
n.insert(10);
n.insert(20);
n.insert(30);
n.insert(60);
n.print(); // 10-->20-->30-->60-->null

n.removeindex(2);
n.print(); // 10-->20-->60-->null

n.removevalue(20);
n.print(); // 10-->60-->null
