//https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
  let maxCount = 0, count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      maxCount = Math.max(maxCount, ++count);
    } else if (s[i] === ')') {
      count--;
    }
  }
  return maxCount;
};

//https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
  for(let i=0;i<prices.length;i++){
    let j=i+1;
    while(j<prices.length){
      if(prices[j]<=prices[i]){
        prices[i]=prices[i]-prices[j];
        break;
      }
      j++;
    }
  }
  return prices;
};

//https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
  let newArray = [];

  let inArray = [...s];

  for (let i = 0; i < inArray.length; i++) {
    if (inArray[i] == newArray[newArray.length - 1]) {
      newArray.pop();
    } else {
      newArray.push(inArray[i])
    }
  }

  return newArray.join('');
};

