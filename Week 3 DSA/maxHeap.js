class MaxHeap {
  constructor() {
    this.heap = [];
  }

 
  // For any node at index 𝑖

  // The parent of the node is located at index
  
  //( 𝑖 − 1 ) / 2

  // The left child is at index
  // 2𝑖+1
  
  // The right child is at index
  // 2i+2.

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  //-----------operations

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] < this.heap[index]) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  remove() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    let maxValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return maxValue;
  }

  heapifyDown() {
    let index = 0;
    let length = this.heap.length;

    while (this.getLeftChildIndex(index) < length) {
      let leftChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);
      let largerIndex = leftChildIndex;

      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] > this.heap[leftChildIndex]
      ) {
        largerIndex = rightChildIndex;
      }

      if (this.heap[index] < this.heap[largerIndex]) {
        this.swap(index, largerIndex);
        index = largerIndex;
      }else{
        break;
      }
    }
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }
}

const maxHeap = new MaxHeap();

maxHeap.insert(23);
maxHeap.insert(44);
maxHeap.insert(33);
maxHeap.insert(10);

console.log(maxHeap.peek());
console.log(maxHeap.remove());
console.log(maxHeap.remove());
console.log(maxHeap.remove());
console.log(maxHeap.remove());


class MaHeap{
  constructor(){
    this.heap = []
  }
  getP(index){
    return Math.floor((index-1)/2)
  }
  getl(index){
    return index*2 +1
  }
  getr(index){
    return index*2 +2
  }
  insert(value){
    this.heap.push(value);
    heapifyUp1()
  }
  remove(){
    if(this.heap.length ===0)return null;
    if(this.heap.length ===1)return this.heap.pop();

    let max = this.heap[0];
    this.heap[0] =this.heap.pop();
    heapifyDown1();
    return max;
  }
  heapifyUp1(){
    let index = this.heap.length -1;
  while(index>0)
    {let parentIndex = this.getP(index)
  if(this.heap[parentIndex]<this.heap[index]){
    swap(parentIndex, index);
    index = parentIndex;
  }else{
    break
  }}
  }

  heapifyDown1(){
    let index = 0;
    
    let length = thi.heap.length;

    while(this.getl(index)<length){
      let left = this.getl(index);
      let right = this.right(index);
      let largest = left;

      if(right< length && this.heap[right]>this.heap[largest]){
        this.swap(right, largest)
      }
      if(this.heap[index ]<this.heap[largest]){
        this.swap(index, largest)
        index = largest;
      }
    }
  }
}