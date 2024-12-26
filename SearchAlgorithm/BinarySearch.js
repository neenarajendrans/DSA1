function binarySearch(arr, target) {
    let low = 0, high = arr.length - 1;
    
    while (low <= high) {
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
