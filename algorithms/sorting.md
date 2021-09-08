# Sorting

### [Sort Array By Parity](https://leetcode.com/problems/sort-array-by-parity/)

```
/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArrayByParity = function(nums) {
  let sortedArray = [];
  let leftItem = 0;
  let rightItem = nums.length - 1;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      sortedArray[leftItem] = nums[i];
      leftItem++;
    } else {
      sortedArray[rightItem] = nums[i];
      rightItem--;
    }
  }
  
  return sortedArray;
};
```

