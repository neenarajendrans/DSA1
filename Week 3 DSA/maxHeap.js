class MaxHeap{
    constructor(){
        this.heap=[];
    }

    //-helpers

    getParentIndex(index){
        return Math.floor((index-1)/2);

    }

    getLeftChildIndex(index){
        return 2 * index +1
    }

    getRightChildIndex(index){
        return 2 * index + 2
    }

    swap(index1,index2){
        let temp = this.heap[index1];
        this.heap[index1]=this.heap[index2];
        this.heap[index2]=temp;
    }

    //-----------operations


    insert(value){
        this.heap.push(value);
        this.heapifyUp()
    }

    heapifyUp(){
        let index = this.heap.length-1;
       
        while(index >0){
            let parentIndex = this.getParentIndex(index);
            if(this.heap[parentIndex] < this.heap[index]){
                this.swap(parentIndex,index)
                index = parentIndex
            }else{
                break;
            }
        }
    }

    remove(){
        if(this.heap.length === 0){
            return null
        }

        if(this.heap.length ===1){
            return this.heap.pop()
        }

        let maxValue = this.heap[0];
        this.heap[0]=this.heap.pop();
        this.heapifyDown()
        return maxValue
    }

    heapifyDown(){
        let index=0;
        let length = this.heap.length;

        while(this.getLeftChildIndex(index)<length){
            let leftChildIndex = this.getLeftChildIndex(index);
            let rightChildIndex =  this.getRightChildIndex(index);
            let largerIndex = leftChildIndex;

            if(rightChildIndex<length && this.heap[rightChildIndex] > this.heap[leftChildIndex]){
                largerIndex = rightChildIndex;
            }

            if(this.heap[index] < this.heap[largerIndex]){
                this.swap(index,largerIndex)
                index=largerIndex;

            }
        }
    }
    
    peek(){
        if(this.heap.length===0){
            return null
        }
        return this.heap[0];
    }
}

const maxHeap = new MaxHeap();

maxHeap.insert(23);
maxHeap.insert(44);
maxHeap.insert(33);
maxHeap.insert(10);

console.log(maxHeap.peek())
console.log(maxHeap.remove())
console.log(maxHeap.remove())
console.log(maxHeap.remove())
console.log(maxHeap.remove())