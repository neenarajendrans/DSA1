function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Assume the current element is the smallest
        let minIndex = i;

        // Find the index of the smallest element in the unsorted portion
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Update the index of the smallest element
            }
        }

        // Swap the smallest element with the current element
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// Example usage:
let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", array);
let sortedArray = selectionSort(array);
console.log("Sorted array:", sortedArray);


function selectionSort(arr){
    for(let i = 0;i<arr.length - 1;i++){
        let minIndex = i
        for(j = i+1;j<arr.length;j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex !== i){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr
}

const arr =[8,20,-2,4,-6]
console.log(selectionSort(arr));
