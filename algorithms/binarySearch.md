# Binary Search 

### [Count Negative Numbers in a Sorted Matrix](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/)

```
/**
 * @param {number[][]} grid
 * @return {number}
 */
 
var countNegatives = function(grid) {
  let negativeCount = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] < 0) {
        negativeCount++;
      };
    }
  }

  return negativeCount;
};
```
