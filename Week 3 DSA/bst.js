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
    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(!root.left){
                root.left = newNode;
                return
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(!root.right){
                root.right=newNode;
                return
            }else{
                this.insertNode(root.right,newNode)
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
    minNode(node){
        while(node.left){
            node=node.left;
        }
        return node;
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
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            // Node with two children: Get the inorder successor (smallest in the right subtree)
            node.value = this.findMin(node.right);
            node.right = this.delete(node.value, node.right);
        }

        return node;
    }
    isValidBST(root,min=-Infinity,max=Infinity){
        if(!root) return true;
      
        if(root.value >= max || root.value <= min) return false
    
        return (
            this.isValidBST(root.left,min,root.value) &&
            this.isValidBST(root.right,root.value,max)
        )
     }
    
     isBalanced(root=this.root){
        return this.checkHeight(root) !== -1;
     }
    
     checkHeight(node){
        if(!node)return 0;
    
        let leftHeight = this.checkHeight(node.left);
        if(leftHeight === -1) return -1
        let rightHeight = this.checkHeight(node.right);
        if(rightHeight === -1) return -1
    
        if(Math.abs(leftHeight - rightHeight)>0) return -1
    
        return Math.max(leftHeight,rightHeight)+1;
    
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
