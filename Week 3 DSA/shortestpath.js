class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(node) {
        this.heap.push(node);
        this._heapifyUp();
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return min;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index].distance >= this.heap[parentIndex].distance) break;

            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;
        while (index < this.heap.length) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].distance < this.heap[smallest].distance) {
                smallest = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].distance < this.heap[smallest].distance) {
                smallest = rightChildIndex;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addEdge(u, v, weight) {
        if (!this.adjList.has(u)) this.adjList.set(u, []);
        if (!this.adjList.has(v)) this.adjList.set(v, []);
        this.adjList.get(u).push({ node: v, weight });
        this.adjList.get(v).push({ node: u, weight });  // For undirected graph
    }

    dijkstra(source) {
        const distances = {};
        const prev = {};
        const minHeap = new MinHeap();

        // Initialize distances and prev map
        this.adjList.forEach((_, node) => {
            distances[node] = Infinity;
            prev[node] = null;
        });

        distances[source] = 0;
        minHeap.insert({ node: source, distance: 0 });

        while (minHeap.heap.length > 0) {
            const { node, distance } = minHeap.extractMin();

            // If the current distance is already greater, no need to continue
            if (distance > distances[node]) continue;

            // Explore neighbors
            this.adjList.get(node).forEach(({ node: neighbor, weight }) => {
                const alt = distance + weight;
                if (alt < distances[neighbor]) {
                    distances[neighbor] = alt;
                    prev[neighbor] = node;
                    minHeap.insert({ node: neighbor, distance: alt });
                }
            });
        }

        return { distances, prev };
    }

    getShortestPath(source, target) {
        const { prev } = this.dijkstra(source);
        const path = [];
        let current = target;

        while (current !== null) {
            path.push(current);
            current = prev[current];
        }

        return path.reverse();
    }
}

// Example Usage:
const graph = new Graph();
graph.addEdge("A", "B", 1);
graph.addEdge("A", "C", 4);
graph.addEdge("B", "C", 2);
graph.addEdge("B", "D", 5);
graph.addEdge("C", "D", 1);

const { distances, prev } = graph.dijkstra("A");

console.log("Shortest distances:", distances);
console.log("Shortest path from A to D:", graph.getShortestPath("A", "D"));
