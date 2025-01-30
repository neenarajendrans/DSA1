
//max heap ascending order
function heapify(arr,length,parentIndex){ // arr, length of the unsorted array , and the parentnode from which we need to sort from.
    let largest = parentIndex;
    let leftnode = parentIndex*2 +1;
    let rightnode = leftnode + 1;
    if(leftnode<length && arr[leftnode]> arr[largest]){
        largest = leftnode;
    }
    if(rightnode< length && arr[rightnode]>arr[largest]){
        largest = rightnode
    }

    if(largest !== parentIndex){
        [arr[largest],arr[parentIndex]]= [arr[parentIndex],arr[largest]]
        heapify(arr,length,largest);
    }
    return arr;

}

function heapSort(arr){
    // build a maxheap
    // if we need to do that we need the lastparent node.
    // lastparent of the array will be in the Math.floor((arr.length/2)-1).
    let length = arr.length;
    let lastParentNode = Math.floor(length/2 - 1);
    let lastChildnode = length-1;// at this point;
//-----------building maxheap----------------
    while(lastParentNode >= 0){
        heapify(arr, length, lastParentNode);
        lastParentNode--; // go to all parent node;

    }
//-------------swapping to reduce the heap to 0 and adding the maximum elements to the empty space which is at the end of the array.


    while(lastChildnode>=0){
        [arr[0],arr[lastChildnode]] = [arr[lastChildnode], arr[0]]//without this line it will be descending order.
        // swap the top of the heap with the smallest.
        heapify(arr,lastChildnode,0)// passing zero in the parentindex
        // the last of the array is considered sorted?
        lastChildnode--;
    }
return arr;

}
console.log(heapSort([2,3,0,5,1,-1]))

// decending order max heap

// function heapSort(arr){
    
//     let length = arr.length;
//     let lastParent = Math.floor(length/2 -1)
//     let lastChild = length -1;
// // build heap
//     while(lastParent>=0){
//         heapify(arr,length,lastParent)
//         lastParent--;
//     }

//     while(lastChild>=0){
//         swapppps missing ---- so output is a descending heap
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

// desending order Min heap