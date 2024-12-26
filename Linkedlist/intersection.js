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

    // Function to find intersection node
    findIntersection(list2) {
        let len1 = this.size;
        let len2 = list2.size;

        // Get the difference in lengths
        let diff = Math.abs(len1 - len2);

        let longer = len1 > len2 ? this.head : list2.head;
        let shorter = len1 > len2 ? list2.head : this.head;

        // Move the pointer of the longer list by the difference
        while (diff > 0) {
            longer = longer.next;
            diff--;
        }

        // Now compare nodes
        while (longer && shorter) {
            if (longer === shorter) {
                return longer; // Intersection found
            }
            longer = longer.next;
            shorter = shorter.next;
        }

        return null; // No intersection
    }
}

// Example usage
const list1 = new LinkedList();
const list2 = new LinkedList();

list1.insert(1);
list1.insert(2);
list1.insert(3);
list1.insert(4);
list1.insert(5);

list2.insert(9);
list2.insert(10);
list2.insert(4);
list2.insert(5);

const intersectionNode = list1.findIntersection(list2);

if (intersectionNode) {
    console.log(`Intersection Node: ${intersectionNode.value}`);
} else {
    console.log("No Intersection Found");
}
