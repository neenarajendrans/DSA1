function Q(a,l=0,r=a.length-1){
    if(l<r){
        let pivot = part(a,l,r);
        Q(arr,l,pivot-1);
        Q(arr,pivot+1,r)

    }
    return a;
}

function part(a,l,r){
    let i=left-1;
    let pivot = a[r];
    for(let j=l; j<r;j++){
        if(a[j]<pivot){
            swap(a,i,j)
        }
        i++;
    }
    swap(a,i,pivot)

    return a;
}
function swap(a,i,j){
    a[i]= a[i]+a[j];
    a[j]= a[i]-a[j];
    a[i]= a[i]-a[j];
    return a;
}
