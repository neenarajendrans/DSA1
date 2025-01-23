class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    push(value) {
        this.stack1.push(value); // Push value onto stack1
    }

    pop() {
        if (this.stack2.length === 0) { // If stack2 is empty
            while (this.stack1.length > 0) { // Transfer all elements from stack1 to stack2
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop(); // Pop the top element from stack2
    }

    peek() {
        if (this.stack2.length === 0) { // If stack2 is empty
            while (this.stack1.length > 0) { // Transfer all elements from stack1 to stack2
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1]; // Return the top element of stack2
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0; // Check if both stacks are empty
    }

    display() {
        // Create a combined view of the queue
        const stack2Reversed = [...this.stack2].reverse(); // Reversed stack2 as it is dequeued in this order
        const combined = stack2Reversed.concat(this.stack1); // Combine stack2 and reversed stack1
        console.log(combined);
        return combined;
    }
}
const q = new Queue();

q.push(1);
q.push(2);
q.push(3);

console.log(q.display()); // Output: [1, 2, 3]

q.pop(); // Removes 1
console.log(q.display()); // Output: [2, 3]

q.push(4);
q.push(5);
console.log(q.display()); // Output: [2, 3, 4, 5]

q.pop(); // Removes 2
console.log(q.display()); // Output: [3, 4, 5]
