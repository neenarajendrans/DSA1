class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BT {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newnode = new Node(value);
        if (!this.root) {
            this.root = newnode;
            return;
        }
        let queue = [this.root];
        while (queue.length > 0) {
            let current = queue.shift();
            if (!current.left) {
                current.left = newnode;
                return;
            } else {
                queue.push(current.left);
            }
            if (!current.right) {
                current.right = newnode;
                return;
            } else {
                queue.push(current.right);
            }
        }
    }

    // DFS Traversals

    inorder(node = this.root) {
        if (node) {
            this.inorder(node.left);
            console.log(node.value);
            this.inorder(node.right);
        }
    }

    preorder(node = this.root) {
        if (node) {
            console.log(node.value);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder(node = this.root) {
        if (node) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.value);
        }
    }

    // BFS Traversal

    levelorder() {
        if (!this.root) return;

        let queue = [this.root];

        while (queue.length > 0) {
            let current = queue.shift();
            console.log(current.value);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
    }

    searchDFS(value, node = this.root) {
        if (!node) return false;
        if (node.value === value) {
            return true;
        }

        return this.searchDFS(value, node.left) || this.searchDFS(value, node.right);
    }

    searchBFS(value) {
        if (!this.root) return false;

        let queue = [this.root];

        while (queue.length > 0) {
            let current = queue.shift();
            if (current.value === value) {
                return true;
            }
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return false;
    }

    getDeepestNode() {
        let queue = [this.root];
        let node = null; // the node variable in which after the loop the deepest node is stored and it is intialized outside for getting the value outside the loop.
        while (queue.length > 0) {
            node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return node;
    }

    deleteDeepestNode(deepestNode) {
        let queue = [this.root];
        while (queue.length > 0) {
            let current = queue.shift();
            if (current.left === deepestNode) {
                current.left = null;
                return;
            } else if (current.left) {
                queue.push(current.left);
            } 
            if (current.right === deepestNode) {
                current.right = null;
                return;
            } else if (current.right) {
                queue.push(current.right);
            }
        }
    }
// Find the node to delete (targetNode) using BFS.
// If found, replace its value with the deepest node's value.
// Remove the deepest node from the tree.
    delete(value) {
        if (!this.root) return false;
        if (this.root.value === value && !this.root.left && !this.root.right) {
            this.root = null;
            return;
        }
        let queue = [this.root];
        let targetNode = null;
        while (queue.length > 0) {
            let current = queue.shift();
            if (current.value === value) {
                targetNode = current;
            }
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }

        if (targetNode) {
            let deepestNode = this.getDeepestNode();
            targetNode.value = deepestNode.value;
            this.deleteDeepestNode(deepestNode);
        }
    }
// min max,2nd,3rd
    findSecondMax() {
        if (!this.root) return null;
        let max = null;
        let secondMax = null;

        const traverse = (node) => {
            if (!node) return;
            if (max === null || node.value > max) {
                secondMax = max;
                max = node.value;
            } else if (secondMax === null || (node.value > secondMax && node.value < max)) {
                secondMax = node.value;
            }
            traverse(node.left);
            traverse(node.right);
        };

        traverse(this.root);
        return secondMax;
    }

    findThirdMax() {
        if (!this.root) return null;
        let max = null;
        let secondMax = null;
        let thirdMax = null;

        const traverse = (node) => {
            if (!node) return;
            if (max === null || node.value > max) {
                thirdMax = secondMax;
                secondMax = max;
                max = node.value;
            } else if (secondMax === null || (node.value > secondMax && node.value < max)) {
                thirdMax = secondMax;
                secondMax = node.value;
            } else if (thirdMax === null || (node.value > thirdMax && node.value < secondMax)) {
                thirdMax = node.value;
            }
            traverse(node.left);
            traverse(node.right);
        };

        traverse(this.root);
        return thirdMax;
    }
}

