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
}

// Define a function to display the tree structure
function displayTree(node, indent = 0) {
    console.log(`${' '.repeat(indent * 2)}- ${node.value}`); // Indentation for hierarchy

    // Recursively display all children
    for (const child of node.children) {
        displayTree(child, indent + 1);
    }
}

// Create the root of the tree
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
displayTree(root);
