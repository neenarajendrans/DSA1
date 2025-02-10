function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }
    let mid= Math.floor(arr.length-1/2);
    let leftA = arr.slice(0,mid);
    let rigthA = arr.slice(mid);
    return merge(mergeSort(leftA),mergeSort(rigthA))
}

function merge(left,right){
    let sorted = [];
    while(left.length && right.length){
        if(left[0]>right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}

let array =[1,3,4,66,9]
console.log(mergeSort(array));
