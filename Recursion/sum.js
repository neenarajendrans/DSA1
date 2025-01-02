function sumArray(arr, index = 0) {
    if (index === arr.length) {
        return 0;  // Base case: If index reaches the length of the array, return 0
    }
    return arr[index] + sumArray(arr, index + 1);  // Sum the current element and recursive call for the rest
}
console.log(sumArray([1, 2, 3, 4, 5]));  // Output: 15
console.log(sumArray([10, 20, 30, 40]));  // Output: 100

function sum(a,index=0){
    if(index === a.length){
        return 0;
    }
    return a[index] + sum(a,index+1)
}

console.log(sum([1, 2, 3, 4, 5]));
