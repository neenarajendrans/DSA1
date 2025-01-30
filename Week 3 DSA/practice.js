// class MaxHeap{
//     constructor(){
//         this.heap=[];

//     }
// //helpers
//     getP(i){
//         return Math.floor((i-1)/2)
//     }
//     getl(i){
//         return 2*i +1;
//     }
//     getr(i){
//         return 2*i +2;
//     }
//     swap(i1,i2){
//         let temp = this.heap[i1];
//         this.heap[i1]= this.heap[i2];
//         this.heap[i2]= temp;
//     }
// //operations

//     insert(value){
//         // insert in the leaf node then heapifyup od bubbleup
//         this.heap.push(value);
//         this.heapifyUp();
//     }
//     heapifyUp(){
//         let index = this.heap.length-1;

//         while(index>0){
//             let pIndex = this.getP(index);
//             if(this.heap[pIndex]< this.heap[index]){
//                 this.swap(pIndex,index);
//                 index = pIndex;
//             }else{
//                 break;
//             }
//         }
//     }

//     remove(){
//         if(this.heap.length ===0)return null;

//         if(this.heap.length ===1){
//             return this.heap.pop()
//         }
//         let max = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapifyDown();
//         return max;
//     }
//     heapifyDown(){
//         let index = 0;
//         let length = this.heap.length;
//         while(this.getl(index)<length){
//             let leftI = this.getl(index);
//             let rightI = this.getr(index);
//             let largeI = leftI;

//             if(rightI<length && this.heap[rightI]>this.heap[leftI]){
//                 largeI= rightI;
//             }

//             if(this.heap[index]< this.heap[largeI]){
//                 this.swap(index,largeI);
//                 index = largeI;
//             }

//         }
//     }
//     peek(){
//         if(this.heap.length===0)return null;
//         return this.heap[0];
//     }
//     display(){
//         console.log(this.heap)
//     }
// }
// const maxHeap = new MaxHeap();
// maxHeap.insert(23);
// maxHeap.insert(44);
// maxHeap.insert(33);
// maxHeap.insert(10);
// maxHeap.display();

// console.log(maxHeap.peek());
// console.log(maxHeap.remove());
// maxHeap.display();


class MaxHeap{
    constructor(){
        this.heap = []
    }

    // helpers

    getP(i){
        return Math.floor((i-1)/2);

    }
    getl(i){
        return 2*i +1;
    }
    getr(i){
        return 2*i +2;
    }
    swap(i1,i2){
        let t = this.heap[i1];
        this.heap[i1]= this.heap[i2];
        this.heap[i2]= t;
    }


    //Methods

    insert(value){
        this.heap.push(value);
        this.heapifyUp()
    }
    heapifyUp(){
       
    }
    remove(){
   

    }
    heapifyDown(){
       
    }
    peek(){
        if(this.heap.length ===0)return null;
        return this.heap[0]
    }
    display(){
        console.log(this.heap)
    }
}


