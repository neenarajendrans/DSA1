function heapify(array, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
  
    if (left < n && array[left] > array[largest]) {
      largest = left;
    }
  
    if (right < n && array[right] > array[largest]) {
      largest = right;
    }
  
    if (largest !== i) {
      [array[i], array[largest]] = [array[largest], array[i]];
      heapify(array, n, largest);
    }
  }
  
  function heapSort(array) {
    let n = array.length;
  
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(array, n, i);
    }
  
    for (let i = n - 1; i >= 0; i--) {
      [array[0], array[i]] = [array[i], array[0]];
      heapify(array, i, 0);
    }
  
    return array;
  }
  
  // Example usage:
  let array = [12, 11, 13, 5, 6, 7];
  console.log("Sorted array:", heapSort(array));  // Output: [5, 6, 7, 11, 12, 13]













function minHeapify(array, n, i) {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
  
    if (left < n && array[left] < array[smallest]) {
      smallest = left;
    }
  
    if (right < n && array[right] < array[smallest]) {
      smallest = right;
    }
  
    if (smallest !== i) {
      [array[i], array[smallest]] = [array[smallest], array[i]];
      minHeapify(array, n, smallest);
    }
  }
  
  function heapSortUsingMinHeap(array) {
    let n = array.length;
  
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      minHeapify(array, n, i);
    }
  
    for (let i = n - 1; i >= 0; i--) {
      [array[0], array[i]] = [array[i], array[0]];
      minHeapify(array, i, 0);
    }
  
    return array.reverse();
  }
  
  // Example usage:
  let array2 = [12, 11, 13, 5, 6, 7];
  console.log("Sorted array:", heapSortUsingMinHeap(array2));  // Output: [5, 6, 7, 11, 12, 13]













function heapifyWithComparator(array, n, i, comparator) {
    let target = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
  
    if (left < n && comparator(array[left], array[target]) > 0) {
      target = left;
    }
  
    if (right < n && comparator(array[right], array[target]) > 0) {
      target = right;
    }
  
    if (target !== i) {
      [array[i], array[target]] = [array[target], array[i]];
      heapifyWithComparator(array, n, target, comparator);
    }
  }
  
  function heapSortWithComparator(array, comparator) {
    let n = array.length;
  
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapifyWithComparator(array, n, i, comparator);
    }
  
    for (let i = n - 1; i >= 0; i--) {
      [array[0], array[i]] = [array[i], array[0]];
      heapifyWithComparator(array, i, 0, comparator);
    }
  
    return array;
  }
  
  // Example usage:
  let array3 = [12, 11, 13, 5, 6, 7];
  const maxComparator = (a, b) => a - b;
  console.log("Sorted array (Max Heap):", heapSortWithComparator(array3, maxComparator));  // Output: [5, 6, 7, 11, 12, 13]
  
  const minComparator = (a, b) => b - a;
  console.log("Sorted array (Min Heap):", heapSortWithComparator(array3, minComparator));  // Output: [13, 12, 11, 7, 6, 5]

