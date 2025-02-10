//create a max heap, add and display

class MaxHeap{
    constructor(){
        this.heap =[]
    }
    getParentIndex(index){
        return Math.floor((index-1)/2)
    }
    swap(i1,i2){
        let temp = this.heap[i1];
        this.heap[i1]= this.heap[i2];
        this.heap[i2]= temp;
    }
    insert(value){
        this.heap.push(value);
        this.heapifyUp();
    }
    heapifyUp(){
        let index = this.heap.length-1;
        
        while(index>0){
            let parentIndex = this.getParentIndex(index);
            if(this.heap[parentIndex]<this.heap[index]){
                this.swap(parentIndex, index);
                index = parentIndex;
            }else{
                break;
            }
        }
    }
    display(){
        console.log(this.heap)
    }
    
}
let heap = new MaxHeap();
heap.insert(10)
heap.insert(20)
heap.insert(5)
heap.insert(30)
heap.display()

