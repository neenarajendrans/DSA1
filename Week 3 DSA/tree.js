class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    // Insert a node under a specific parent
    insert(value, parentValue = null) {
        const newNode = new Node(value);

        if (this.root === null) {
            // If the tree is empty, set the new node as the root
            this.root = newNode;
            return;
        }

        if (parentValue === null) {
            throw new Error("Specify a parent value to add a child.");
        }

        // Find the parent node and add the new node as its child
        const parent = this.findNode(this.root, parentValue);
        if (!parent) {
            throw new Error(`Parent node with value '${parentValue}' not found.`);
        }

        parent.children.push(newNode);
    }

    // Remove a node with the given value
    remove(value) {
        if (!this.root) {
            throw new Error("Tree is empty.");
        }

        if (this.root.value === value) {
            this.root = null; // Remove the root
            return;
        }

        // Recursively remove the node
        const isRemoved = this.removeNode(this.root, value);

        if (!isRemoved) {
            throw new Error(`Node with value '${value}' not found.`);
        }
    }

    // Helper function to find a node
    findNode(node, value) {
        if (node.value === value) {
            return node;
        }

        for (let child of node.children) {
            const found = this.findNode(child, value);
            if (found) {
                return found;
            }
        }

        return null;
    }

    // Helper function to remove a node
    removeNode(parent, value) {
        for (let i = 0; i < parent.children.length; i++) {
            if (parent.children[i].value === value) {
                parent.children.splice(i, 1);
                return true;
            }

            const isRemoved = this.removeNode(parent.children[i], value);
            if (isRemoved) {
                return true;
            }
        }

        return false;
    }

    // Display the tree structure
    display(node = this.root, depth = 0) {
        if (!node) {
            console.log("Tree is empty.");
            return;
        }

        console.log("  ".repeat(depth) + node.value);

        for (let child of node.children) {
            this.display(child, depth + 1);
        }
    }
}

// Example usage
const tree = new Tree();
tree.insert("Root");
tree.insert("Child1", "Root");
tree.insert("Child2", "Root");
tree.insert("Grandchild1", "Child1");
tree.insert("Grandchild2", "Child1");

tree.display();

console.log("Removing 'Child1'...");
tree.remove("Child1");
tree.display();
