// pivot = last element of the array
function quickSort(arr){
    if(arr.length <2)return arr;
    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];
    for(let i =0; i<arr.length-1; i++){
        if(arr[i]< pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return[...quickSort(left),pivot,...quickSort(right)]
}
let a = [-6, -8, -2 , 20, 49, 4, 6 ,0];
console.log(quickSort(a));
//worst case - O(n^2)T = when array is already sorted;
//Average case - O(n log n)T = what matters

function Q(a){
    if(a.length<2)return a;
    let pivot = a[a.length-1];
    let l = [];
    let r= [];
    for(let i=0; i< a.length-1;i++){
        if(a[i]<pivot){
            l.push(a[i])
        }else{
            r.push(a[i])
        }
    }
    return [...Q(l),pivot,...Q(r) ]
}
console.log(Q(a));
