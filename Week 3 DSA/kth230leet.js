function kthsmall(root){
    let result = null;
    let count = 0;
    const inOrder=(node)=>{
        if(!node || result !==null)return
        inOrder(node.left)
        count++;
        if(count ===K){
            result = node.value;
            return
        }
        inOrder(node.right)
    }
    inOrder(root)
    return result;
}