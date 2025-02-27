function bubbleSort(arr) {
  let n = arr.length;

  // Outer loop for traversing the entire array
  for (let i = 0; i < n; i++) {
    // Flag to optimize and stop early if no swap occurs
    let swapped = false;

    // Inner loop for comparing adjacent elements
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements if they are in the wrong order
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        
        // Set swapped to true if swap happens
        swapped = true;
      }
    }
    
    // If no elements were swapped, the array is sorted
    if (!swapped) break;
  }

  return arr;
}

let arr = [5, 2, 9, 1, 5, 6];
console.log("Sorted Array:", bubbleSort(arr));  // Output: [1, 2, 5, 5, 6, 9]
