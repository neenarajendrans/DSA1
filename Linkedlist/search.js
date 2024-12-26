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

    getsize() {
        return this.size;
    }

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

    insert(value, index = this.size) { // Default to append if index not provided
        let node = new Node(value);
        if (index < 0 || index > this.size) { // Validate index
            console.log("Invalid index");
            return;
        }

        if (!this.head) { // Empty list
            this.head = node;
            this.tail = node;
        } else if (index === 0) { // Insert at the head
            node.next = this.head;
            this.head = node;
        } else if (index === this.size) { // Insert at the tail
            this.tail.next = node;
            this.tail = node;
        } else { // Insert at a specific index
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
        }

        this.size++; // Increment size after insertion
    }

    search(value) {
        if (!this.head) {
            return -1;
        }
        let i = 0;
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1;
    }
}

// Example Usage
const n = new Linkedlist();
n.insert(10); // Insert at index 0 (default is append)
n.insert(20);
n.insert(30);
n.insert(60);
n.insert(100);

console.log("Size of LinkedList:", n.getsize()); // 5
n.print(); // 10-->20-->30-->60-->100-->null
