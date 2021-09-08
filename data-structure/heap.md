# Heap

### [Maximum Product of Two Elements in an Array](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/)

```
/**
 * @param {number[]} nums
 * @return {number}
 */
 
var maxProduct = function(nums) {
  let sortedArray = nums.sort((a, b) => b - a);
  console.log(sortedArray);
  return (sortedArray[0] - 1) * (sortedArray[1] - 1);
};
```
