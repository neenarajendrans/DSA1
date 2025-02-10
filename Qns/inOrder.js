class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;

    }
}

class BST{
    constructor(root){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value)
        if(!this.root){
            this.root=newNode;
            return 
        }
        let current = this.root;
        while(true){
            if(value<current.value){
                if(!current.left){
                    current.left = newNode;
                    return;
                }
                current = current.left;
            }else if(value>current.value){
                if(!current.right){
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }else{
                return;
            }
        }
    }
    inOrder(node = this.root){
        if(node){
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }
}

let bst = new BST();
bst.insert(10)
bst.insert(20)
bst.insert(30)
bst.insert(40)
bst.inOrder()