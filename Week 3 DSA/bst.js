class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert a value into the BST
    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else if (value > current.value) {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            } else {
                // Duplicate values are not allowed
                return;
            }
        }
    }

    // Search for a value in the BST
    search(value, node = this.root) {
        if (!node) return false;
        if (node.value === value) return true;

        if (value < node.value) {
            return this.search(value, node.left);
        } else {
            return this.search(value, node.right);
        }
    }
    // Level Order Traversal (BFS)
levelOrder() {
    if (!this.root) return; // If the tree is empty, return

    const queue = [this.root]; // Initialize a queue with the root node

    while (queue.length > 0) {
        const node = queue.shift(); // Dequeue the front node
        console.log(node.value); // Process the current node

        // Enqueue the left and right children
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
}


    // Inorder Traversal (Left -> Root -> Right)
    inorder(node = this.root) {
        if (node) {
            this.inorder(node.left);
            console.log(node.value);
            this.inorder(node.right);
        }
    }

    // Preorder Traversal (Root -> Left -> Right)
    preorder(node = this.root) {
        if (node) {
            console.log(node.value);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    // Postorder Traversal (Left -> Right -> Root)
    postorder(node = this.root) {
        if (node) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.value);
        }
    }

    // Find the minimum value in the BST
    findMin(node = this.root) {
        if (!node) return null;

        while (node.left) {
            node = node.left;
        }
        return node.value;
    }

    // Find the maximum value in the BST
    findMax(node = this.root) {
        if (!node) return null;

        while (node.right) {
            node = node.right;
        }
        return node.value;
    }

    // Delete a node in the BST
    delete(value, node = this.root) {
        if (!node) return null;

        if (value < node.value) {
            node.left = this.delete(value, node.left);
        } else if (value > node.value) {
            node.right = this.delete(value, node.right);
        } else {
            // Node with only one child or no child
            if (!node.left) return node.right; //either null, or value
            if (!node.right) return node.left;

            // Node with two children: Get the inorder successor (smallest in the right subtree)
            node.value = this.findMin(node.right);
            node.right = this.delete(node.value, node.right);
        }

        return node;
    }
d(value,current = this.root){
    if(!current){
        return null
    }

    if(value<current.value){
        current.left = this.d(value, current.left)
    }
    else if(value<current.value){
        current.right = this.d(value, current.right)
    }else{
        if(!current.left)return current.right;
        if(!current.right)return current.left;

        current.value = this.findMin(current.right);
        current.right = this.d(current.value,current.right)
    }
}
    delete(value,current = this.root){
        // base case
        if(!current){
            return null;
        }
        // find value to be deleted
        if(value<current.left){
            current = this.delete(value, current.left)
        }else if(value>current.right){
            current = this.delete(value,current.right)
        }else{

        // if node has only one child or no child
        if(!current.left) return current.right;
        if(!current.right) return current.left;
       
        // if node has two child we choose smallest right child

        current.value = this.findMin(current.right);
        current.right = this.delete(current.value,current.right)
    }
    return current;
    }

    delete(value,node = this.root){
        if(!node)return null;
        if(value<node.value){
            node.left = this.delete(value,node.left)
        }else if(value>node.value){
            node.right = this.delete(value, node.right)
        }else{
            if(!node.left)return node.right;
            if(!node.right)return node.left;

            node.value = this.findMin(node.right);
            node.right = this.delete(node.value,node.right)
        }
    }

    // Check if the tree is a valid BST
    isValidBST(root = this.root, min = -Infinity, max = Infinity) {
        if (!root) return true;

        if (root.value <= min || root.value >= max) return false;

        return (
            this.isValidBST(root.left, min, root.value) &&
            this.isValidBST(root.right, root.value, max)
        );
    }
    
isV(root = this.root, min = Infinity, max = -Infinity){
    if(!root)return true;

    if(root.value<=min || root.value >=max)return false;

    return(
        this.isV(root.left,min,root.value) &&
        this.isV(root.right, root.value,max)
    )
}
    isVali(root = this.root, min = -Infinity, max = Infinity){
        if(!root)return true;
        if(root.value<=min || root.value>=max)return false;
        return (
            this.isVali(root.left, min, root.value) &&
            this.isVali(root.right, root.value,max)
        )
    }

    // Check if the tree is balanced
    isBalanced(root = this.root) {
        return this.checkHeight(root) !== -1;
    }
    
    isb(root = this.root){
        return this.checkHeight(root) !== -1
    }

    checkHeight(node) {
        if (!node) return 0;
       
        const leftHeight = this.checkHeight(node.left);
        if (leftHeight === -1) return -1;

        const rightHeight = this.checkHeight(node.right);
        if (rightHeight === -1) return -1;

        if (Math.abs(leftHeight - rightHeight) > 1) return -1;

        return Math.max(leftHeight, rightHeight) + 1;
    }

    min(root) {
        if (!root.left) {
          return root.value;
        } else {
          return this.min(root.left);
        }
      }
    
      max(root) {
        if (!root.right) {
          return root.value;
        } else {
          return this.max(root.right);
        }
      }
}

// Example Usage
const bst = new BinarySearchTree();

// Inserting nodes
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

// Traversals
console.log("Inorder Traversal:");
bst.inorder();

console.log("Preorder Traversal:");
bst.preorder();

console.log("Postorder Traversal:");
bst.postorder();

// Search
console.log("Search for 60:", bst.search(60)); // true
console.log("Search for 90:", bst.search(90)); // false

// Find Min and Max
console.log("Minimum Value:", bst.findMin());
console.log("Maximum Value:", bst.findMax());

// Delete Node
bst.delete(50);
console.log("Inorder Traversal after Deletion:");
bst.inorder();

// Check Valid BST
console.log("Is Valid BST:", bst.isValidBST());

// Check if Tree is Balanced
console.log("Is Balanced:", bst.isBalanced());
