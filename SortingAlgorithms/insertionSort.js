function insertionSort (arr){
    // divide the array in to sorted and unsorted portion.
    // at first the sorted portion is only the first element.
    // we need to loop throught the unsorted part array. so for loop from index 1;
    for(let i=1; i<arr.length; i++){
        let numberToInsert = arr[i];
        let j =i-1; // this is the starting index to loop through the sorted part. and we will do j-- until j=0;
        // along with loop we check the current number to insert and the current sorted elment selected. 
        while(j>=0 && arr[j]>numberToInsert){
            //if sorted element is greater than numbertoinsert we need to move the larger element to the next position of the array;
            arr[j+1]= arr[j];
            j= j-1;// to loop through sorted part.
        } 
        //so when the loop end the arr[j+1] will be the position of the number to be inserted.
        arr[j+1]=numberToInsert;

    }
    return arr;
}

let a = [-6, -8, -2 , 20, 49, 4, 6 ,0];
console.log(insertionSort(a));
//O(n^2)T 


