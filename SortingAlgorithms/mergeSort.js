function mergeSort (arr){
    if(arr.length<2){
        return arr;
    }
    const mid = Math.floor(arr.length/2)
    const leftArray = arr.slice(0,mid)
    const rigthArray = arr.slice(mid)
    return(merge(mergeSort(leftArray),mergeSort(rigthArray)))
}

function merge(leftArr, rightArr){
    let sorted = [];
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<rightArr[0]){
            sorted.push(leftArr.shift())
        }else{
            sorted.push(rightArr.shift())
        }
    }
    return [...sorted,...leftArr,...rightArr]
}

const a = [1,3,5,6,7,0,67]
console.log(mergeSort(a));
//O(n logn )T
// O(n)s
function mSort(a){
    if(a.length<2){
        return a;
    }
    const mid = Math.floor(a.length/2);
    let leftA = a.slice(0,mid);
    let rightA = a.slice(mid)
    return(m(mSort(leftA),mSort(rightA)))
}

function m(l,r){
    let sort = [];
    while(l.length && r.length){
        if(l[0]<r[0]){
            sort.push(l.shift())
        }else{
            sort.push(r.shift())
        }
    }
    return [...sort,...l,...r]
}
console.log(mSort(a));