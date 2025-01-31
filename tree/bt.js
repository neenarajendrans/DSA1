class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;

    }
}

class BT{
    constructor(){
        this.root = null;

    }

    insert(value){
        let newNode = new Node(value)
        if(!this.root){
            this.root = newNode;
        }
        let queue = [this.root];
        while(queue.length > 0){
            let current = queue.shift();
            if(!current.left ){
                current.left = newNode
                return;
            }else{
                queue.push(current.left)
            }
            if(!current.right){
                current.right = newNode
                return;
            }else{
                queue.push(current.right)
            }


        }
    }


}