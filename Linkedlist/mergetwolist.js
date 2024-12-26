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

    insert(value, index = this.size) {
        let node = new Node(value);
        if (index < 0 || index > this.size) {
            return null; // Invalid index
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

        this.size++;
    }
}

function merge(l1, l2) {
    if (!l1.head) return l2.head;
    if (!l2.head) return l1.head;

    let current = l1.head;
    while (current.next) {
        current = current.next;
    }
    current.next = l2.head;

    return l1;
}

// Create and populate the linked lists
const l1 = new Linkedlist();
const l2 = new Linkedlist();

l1.insert(10);
l1.insert(20);
l1.insert(30);
l1.insert(40);
l1.insert(50);
l1.print(); // 10-->20-->30-->40-->50-->null

l2.insert(60);
l2.insert(70);
l2.insert(80);
l2.insert(90);
l2.insert(100);
l2.print(); // 60-->70-->80-->90-->100-->null

// Merge the lists
const mergedList = merge(l1, l2);

// Print the merged list
mergedList.print(); // 10-->20-->30-->40-->50-->60-->70-->80-->90-->100-->null
