//https://leetcode.com/problems/sort-array-by-parity/

var sortArrayByParity = function (A) {
  let res = [], left = 0, right = A.length - 1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      res[left] = A[i];
      left++;
    } else {
      res[right] = A[i];
      right--;
    }
  }
  return res;
};
