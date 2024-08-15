### URL

```
https://drive.google.com/file/d/1FMdN_OCfOI0iAeDlqswCiC2DZzD4nPsb/view?pli=1
```

```
https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2
```

# Time Complexity

Time Complexity (TC) refers to how the running time of an algorithm grows with respect to the input size, not the actual time taken to execute the algorithm.

For example, if you have a loop that iterates through an array of size 100, printing each element, the number of operations performed will be proportional to the input size (100 operations).

### Graph Representation:

- **Vertical Axis**: Number of operations
- **Horizontal Axis**: Input size (n)

Big O Notation is used to describe the **worst-case** time complexity of an algorithm.

## Common Time Complexities:

### O(1) - Constant Time:

Operations take a constant amount of time, regardless of input size.  
_Example_: Accessing an element in an array (whether it has 1 or 10 million elements).

### O(n) - Linear Time:

Time complexity grows linearly with input size.  
_Example_: Iterating through an array of size `n` results in `n` operations.

### O(n²) - Quadratic Time:

Occurs in algorithms with nested loops. Time complexity grows quadratically with input size.  
_Example_: Iterating over a 2D matrix of size `n × n` requires `n²` operations.

### O(log n) - Logarithmic Time:

This is more efficient than linear time, as the algorithm reduces the input size by dividing it.  
_Example_: Binary search operates in `O(log n)`, halving the search space each time.

### O(n log n) - Linearithmic Time:

Common in efficient sorting algorithms like merge sort and quicksort. Time complexity grows faster than linear but slower than quadratic.

### O(2^n) - Exponential Time:

Common in algorithms with recursive solutions, where the time complexity doubles with each added input element.  
_Note_: Exponential algorithms become impractical for large inputs. Techniques like dynamic programming can often reduce complexity.
