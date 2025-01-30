class Node{
    constructor(value){
        this.value = value;
        this.left = null; 
        this.right = null;

    }


}

class BST{
    constructor() {
        this.root = null;
        
    }

    inorder(node = this.root){
        if(node){
            this.inorder(node.left);
            console.log(node.value);
            this.inorder(node.right)
        }
    }
    preorder(node = this.root){
        if(node){
            console.log(node.value);
            this.inorder(node.left);
            
            this.inorder(node.right)
        }
    }
    postorder(node = this.root){
        if(node){
            this.inorder(node.left);
            
            this.inorder(node.right)
            console.log(node.value);
        }
    }

    insert(value){
        let newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return;
        }
        let current = this.root;
        while(true){
            if(value <current.value){
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
search(value, node = this.root){
    if(!node)return false;
    if(node.value === value)return true;
    if(value<node.value){
        this.search(value, node.left)
    }else{
        this.search(value, node.right)
    }
}

levelorder(){
 let queue = [this.root];
 while(queue.length>0){
    let current = queue.shift();
    console.log(current.value)
    if(current.left)queue.push(current.left)
    if(current.right)queue.push(current.right)
 }
}
findmin(node = this.root){
    if(!node)return null;
    while(node.left){
        node = node.left
    }
    return node.value;
}
findmax(node= this.root){
    if(!node)return null;
    while(node.right){
        node = node.right;
    }
    return node.value;
}
delete(value, node= this.root){
     if(!node)return null;
     if(value<node.value){
        node.left = this.delete(value, node.left)
     }else if(value>node.value){
            node.right = this.delete(value, node.right)
    }else{
        if(node.left) return node.right;
        if()
    }
}
       
}