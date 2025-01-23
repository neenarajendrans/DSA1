class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let node = new TreeNode(value);
        if (this.root === null) {
            this.root = node;
            return this;
        }
        let temp = this.root;
        while (true) {
            if (node.value === temp.value) return undefined; // Avoid duplicates
            if (node.value < temp.value) {
                if (temp.left === null) {
                    temp.left = node;
                    return this;
                }
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    temp.right = node;
                    return this;
                }
                temp = temp.right;
            }
        }
    }

    isBST() {
        const validate = (node, min = -Infinity, max = Infinity) => {
            if (node === null) return true; // Null nodes are valid
            if (node.value <= min || node.value >= max) return false; // Violate BST property
            // Check left and right subtrees with updated ranges
            return (
                validate(node.left, min, node.value) &&
                validate(node.right, node.value, max)
            );
        };
        return validate(this.root);
    }
}

// Test the BST and validation
let bt = new BST();
bt.insert(10);
bt.insert(5);
bt.insert(15);
bt.insert(2);
bt.insert(7);

console.log(bt.isBST()); // Output: true

// Creating a tree that is NOT a BST
let notBST = new BST();
notBST.root = new TreeNode(10);
notBST.root.left = new TreeNode(20); // Violates BST property
notBST.root.right = new TreeNode(5); // Violates BST property

console.log(notBST.isBST()); // Output: false
