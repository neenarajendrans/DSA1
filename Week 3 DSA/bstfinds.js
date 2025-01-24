class BST {
    constructor() {
        this.root = null;
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

    // Find the second minimum value
    findSecondMin(node = this.root) {
        let min = this.findMin(node);
        let secondMin = null;
        
        const inOrderTraversal = (node) => {
            if (!node) return;
            
            inOrderTraversal(node.left);

            // Find the second minimum value greater than the minimum value
            if (node.value > min && secondMin === null) {
                secondMin = node.value;
            }

            inOrderTraversal(node.right);
        };

        inOrderTraversal(node);
        return secondMin;
    }

    // Find the third minimum value
    findThirdMin(node = this.root) {
        let min = this.findMin(node);
        let secondMin = this.findSecondMin(node);
        let thirdMin = null;
        
        const inOrderTraversal = (node) => {
            if (!node) return;
            
            inOrderTraversal(node.left);

            // Find the third minimum value greater than the second minimum value
            if (node.value > secondMin && thirdMin === null) {
                thirdMin = node.value;
            }

            inOrderTraversal(node.right);
        };

        inOrderTraversal(node);
        return thirdMin;
    }

    // Find the second maximum value
    findSecondMax(node = this.root) {
        let max = this.findMax(node);
        let secondMax = null;

        const inOrderTraversal = (node) => {
            if (!node) return;

            inOrderTraversal(node.left);

            // Find the second maximum value smaller than the maximum value
            if (node.value < max && secondMax === null) {
                secondMax = node.value;
            }

            inOrderTraversal(node.right);
        };

        inOrderTraversal(node);
        return secondMax;
    }

    // Find the third maximum value
    findThirdMax(node = this.root) {
        let max = this.findMax(node);
        let secondMax = this.findSecondMax(node);
        let thirdMax = null;

        const inOrderTraversal = (node) => {
            if (!node) return;

            inOrderTraversal(node.left);

            // Find the third maximum value smaller than the second maximum value
            if (node.value < secondMax && thirdMax === null) {
                thirdMax = node.value;
            }

            inOrderTraversal(node.right);
        };

        inOrderTraversal(node);
        return thirdMax;
    }
}
// Example Usage
const bst = new BST();

// Inserting nodes
bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);
