#### Quick Sort:

1. Select a Pivot Element:
   The first step in Quick Sort is to select an element from the array, which will act as the pivot. The pivot can be any element, but it’s common to choose the first, last, or middle element.
   For example, in the array [8, 3, 7, 6, 2, 5, 4], if we choose 4 as the pivot, we’ll use it to compare and rearrange the other elements.

2. Partition the Array:
   The array is then partitioned into two parts:
   Left Part: All elements less than the pivot.
   Right Part: All elements greater than the pivot.
   In our example, after partition ing around pivot 4, the array might look like [3, 2, 4, 8, 7, 6, 5].
   Notice that 3 and 2 are less than 4 (pivot), and 8, 7, 6, 5 are greater than 4. 3.

3. Place the Pivot in Its Correct Position:
   After partitioning, the pivot element is in its final position in the sorted array.
   For example, after placing 4 in its correct position, the array might become [3, 2, 4, 5, 7, 6, 8].

4. Recursively Apply Quick Sort to the Sub-arrays:
   Now, Quick Sort is applied recursively to the sub-arrays on the left and right of the pivot.
   Left Sub-array: [3, 2]
   Right Sub-array: [5, 7, 6, 8]
   These sub-arrays are sorted separately by repeating the process: selecting a pivot, partitioning, and then recursively sorting the smaller sub-arrays.

5. Repeat the Process Until the Entire Array is Sorted:
   For the left sub-array [3, 2], if 2 is chosen as the pivot, it will result in [2, 3] after sorting.
   For the right sub-array [5, 7, 6, 8], if 6 is chosen as the pivot, it will result in [5, 6, 7, 8] after sorting.
   Finally, when all sub-arrays are sorted, the entire array is combined to form the sorted array [2, 3, 4, 5, 6, 7, 8].

#### Summary of the Process:

Select a Pivot: Choose a pivot element from the array.
Partition: Rearrange elements so that elements less than the pivot are on the left and elements greater than the pivot are on the right.
Recursive Sorting: Apply Quick Sort recursively to the left and right sub-arrays.
Combine: Once all sub-arrays are sorted, the entire array is sorted.
