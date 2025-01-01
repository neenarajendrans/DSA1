function reverse (a){
    let start = 0;
    let end = a.length-1;
    console.log(a[end])
    while(start<end){ // here when start and end becomes the same value. the loop break that is the loop breaks at the middle.
        a[start] = a[start] + a[end];
        a[end] = a[start] - a[end];
        a[start] = a[start] - a[end];

        start++;
        end--;
    }
    return a;
}
let array = [1,2,3,4,5,5,6]
console.log(reverse(array))
// array.

// output [ 6, 5, 5, 4, 3, 2, 1 ]
// O(n)T
// O(1)S

//Builtin reverse() also have O(n)T && O(1)S
console.log(array.reverse());

