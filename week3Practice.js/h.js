function heapSort(arr){
    //build max heap
    let length = arr.length;
    let lastParentindex = Math.floor(length/2 -1);
    let lastChild = length -1;

    while(lastParentindex>=0){
        heapify(arr,length,lastParentindex);
        lastParentindex--;
    }

    // sort 

    while(lastChild>=0){
        [arr[0],arr[lastChild]]= [arr[lastChild],arr[0]];
        heapify(arr,lastChild,0);
        lastChild--
    }

    return arr;
}
function heapify(arr,length,parentIndex){
    let largest = parentIndex;
    let left = parentIndex*2 +1;
    let right = left +1;

    if(left< length && arr[left]> arr[largest]){
        largest = left;
    }
    if(right< length && arr[right]> arr[largest]){
        largest = right;
    }

    if(largest !== parentIndex){
        [arr[largest],arr[parentIndex]]=[arr[parentIndex],arr[largest]];
        heapify(arr,length,largest)
    }

return arr;
}

console.log(heapSort([2,3,0,5,1,-1]))


function heapSortDes(arr){
    let length = arr.length;
    let lastParentI = Math.floor(length/2 -1);
    let lastChildI = length-1;

    //build min heap

    while(lastParentI>=0){
        heapifyDes(arr,length, lastParentI);
        lastParentI--;
    }

    //sorting
    while(lastChildI>=0){
        [arr[0],arr[lastChildI]]=[arr[lastChildI],arr[0]];
        heapifyDes(arr,lastChildI,0);
        lastChildI--;
    }
    return arr;
}

function heapifyDes(arr,length,parentI){
    let smallest = parentI;
    let left = parentI*2 +1;
    let right = left+1;

    if(left<length && arr[left]<arr[smallest]){
        smallest = left;
    }
    if(right<length && arr[right]<arr[smallest]){
        smallest = right;
    }

    if(smallest !== parentI){
        [arr[smallest],arr[parentI]]= [arr[parentI],arr[smallest]]
        heapifyDes(arr,length,smallest)
    }
    return arr;
}
console.log(heapSortDes([2,3,0,5,1,-1]))