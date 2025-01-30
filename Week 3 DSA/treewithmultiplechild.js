// Define the Node class for the tree
class TreeNode {
    constructor(value) {
        this.value = value; // Node value
        this.children = []; // Array to hold child nodes
    }

    // Add a child to the current node
    addChild(child) {
        this.children.push(child);
    }

    // Remove a child by value
    removeChild(value) {
        this.children = this.children.filter(child => child.value !== value);
    }
}

// Simplified display function
function displayTree(node) {
    console.log(node.value); // Display the node value

    // Display children, if any
    for (const child of node.children) {
        displayTree(child); // Recursive call for children
    }
}

// Example usage
const root = new TreeNode("Root");

// Add children to the root node
const child1 = new TreeNode("Child 1");
const child2 = new TreeNode("Child 2");
const child3 = new TreeNode("Child 3");
root.addChild(child1);
root.addChild(child2);
root.addChild(child3);

// Add grandchildren
child1.addChild(new TreeNode("Child 1.1"));
child1.addChild(new TreeNode("Child 1.2"));

child2.addChild(new TreeNode("Child 2.1"));

child3.addChild(new TreeNode("Child 3.1"));
child3.addChild(new TreeNode("Child 3.2"));
child3.addChild(new TreeNode("Child 3.3"));

// Display the tree structure
console.log("Tree structure before removal:");
displayTree(root);

// Remove a node
child3.removeChild("Child 3.2");

// Display the tree structure after removal
console.log("\nTree structure after removal:");
displayTree(root);
