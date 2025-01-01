function BR(a,t){
    return search(a,t,0,a.length-1)
}

function search (a,t,l,r){
    if(l>r){
        return -1;
    }
    let mid = Math.floor((l+r)/2)
    if(a[mid] === t){
        return mid;
    }
    if(t<a[mid]){
       return  search(a,t,l,mid-1)
    }else{
       return search(a,t,mid+1,r)
    }

}
 let a = [2,3,4,24,53,322,43]
 let t =53;
console.log( BR(a,t))