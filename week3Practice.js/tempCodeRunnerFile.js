    
//     let length = arr.length;
//     let lastParent = Math.floor(length/2 -1)
//     let lastChild = length -1;
// // build heap
//     while(lastParent>=0){
//         heapify(arr,length,lastParent)
//         lastParent--;
//     }

//     while(lastChild>=0){
//         heapify(arr,lastChild,0)// zero is where the swapped element is , we need to do heapify to maintain the heap property.so that we can extract the next maximum element form the top of the element.
//         lastChild--;
//     }

//     return arr;
// }
// function heapify (arr,length,parentIndex){
//     let largest = parentIndex;
//     let left = parentIndex*2 +1;
//     let right = left+1;

//     if(left<length && arr[left ]> arr[largest]){
//         largest = left;
//     }
//     if(right<length && arr[right ] > arr[largest]){
//         largest = right;
//     }

//     if(largest !== parentIndex){
//         [arr[largest],arr[parentIndex]]= [arr[parentIndex],arr[largest]];
//         heapify(arr, length, largest)
//     }
//     return arr;
// }

// console.log(heapSort([2,3,0,5,1,-1]))