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

    // Insert a node at a specific index (or at the end if no index is provided)
    insert(value, index = this.size) {
        const node = new Node(value);

        // Check for invalid index
        if (index < 0 || index > this.size) {
            return console.log("Invalid index");
        }

        if (!this.head) {
            // Empty list
            this.head = node;
            this.tail = node;
        } else if (index === 0) {
            // Insert at the beginning
            node.next = this.head;
            this.head = node;
        } else if (index === this.size) {
            // Insert at the end
            this.tail.next = node;
            this.tail = node;
        } else {
            // Insert in the middle
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
        }

        this.size++;
    }
}

// Example usage
const n = new Linkedlist();
n.insert(10); // Insert 10 at the end
n.print();    // 10-->null
n.insert(20); // Insert 20 at the end
n.insert(5, 0); // Insert 5 at index 0 (beginning)
n.print();    // 5-->10-->20-->null
n.insert(15, 2); // Insert 15 at index 2
n.print();    // 5-->10-->15-->20-->null
