class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Helper Methods

    // Get the index of the parent node
    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // Get the index of the left child node
    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    // Get the index of the right child node
    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    // Swap two elements in the heap
    swap(index1, index2) {
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    // Core Operations

    // Insert a value into the heap
    insert(value) {
        this.heap.push(value); // Add the value at the end of the heap
        this.heapifyUp(); // Reorganize the heap to maintain the min-heap property
    }

    heapifyUp() {
        let index = this.heap.length - 1; // Start from the last inserted element

        while (index > 0) {
            let parentIndex = this.getParentIndex(index);

            // If the parent is larger than the current node, swap them
            if (this.heap[parentIndex] > this.heap[index]) {
                this.swap(parentIndex, index);
                index = parentIndex; // Move up to the parent's index
            } else {
                break; // Heap property is satisfied
            }
        }
    }

    // Remove and return the smallest element (root) from the heap
    remove() {
        if (this.heap.length === 0) {
            return null; // Heap is empty
        }

        if (this.heap.length === 1) {
            return this.heap.pop(); // Only one element in the heap
        }

        let minValue = this.heap[0]; // Smallest element is at the root
        this.heap[0] = this.heap.pop(); // Replace root with the last element
        this.heapifyDown(); // Reorganize the heap to maintain the min-heap property
        return minValue;
    }

    heapifyDown() {
        let index = 0;
        let length = this.heap.length;

        while (this.getLeftChildIndex(index) < length) {
            let leftChildIndex = this.getLeftChildIndex(index);
            let rightChildIndex = this.getRightChildIndex(index);
            let smallerIndex = leftChildIndex;

            // If the right child exists and is smaller, choose it instead
            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
                smallerIndex = rightChildIndex;
            }

            // If the parent is larger than the smaller child, swap them
            if (this.heap[index] > this.heap[smallerIndex]) {
                this.swap(index, smallerIndex);
                index = smallerIndex; // Move down to the child's index
            } else {
                break; // Heap property is satisfied
            }
        }
    }

    // Peek at the smallest element (root) without removing it
    peek() {
        if (this.heap.length === 0) {
            return null; // Heap is empty
        }
        return this.heap[0];
    }
}

// Example Usage
const minHeap = new MinHeap();

minHeap.insert(23);
minHeap.insert(44);
minHeap.insert(33);
minHeap.insert(10);

console.log("Peek:", minHeap.peek()); // Smallest element (root)
console.log("Remove:", minHeap.remove()); // Remove and return the smallest element
console.log("Remove:", minHeap.remove());
console.log("Remove:", minHeap.remove());
console.log("Remove:", minHeap.remove());
