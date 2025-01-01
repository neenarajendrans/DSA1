function binarySearch(arr, target) {
    let low = 0, high = arr.length - 1;
    console.log(a[high])
    while (low <= high) {// here the we are looping through all the elements in an array.
        let mid = Math.floor((low + high) / 2);
        
        if (arr[mid] === target) {
            return mid;  // Target found, return index
        } else if (arr[mid] < target) {
            low = mid + 1;  // Move to the right
        } else {
            high = mid - 1;  // Move to the left
        }
    }
    
    return -1;  // Target not found
}
let a = [2,3,4,24,53,322,43]
 let t =53;
console.log( binarySearch(a,t))


