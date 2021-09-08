//https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/

/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
  let valuesObject = {};

  for (let item of s) {
    valuesObject[item] = (valuesObject[item] || 0) + 1;
  }

  let val = valuesObject[s[0]]

  for (let item in valuesObject) {
    if (valuesObject[item] && valuesObject[item] != val) {
      return false;
    };
  }
  return true;

};

//https://leetcode.com/problems/maximum-number-of-words-you-can-type/
/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
  let inArray = text.split(' ');

  let filtered = inArray.map(item => {
    return item.split('').some(i => {
      return brokenLetters.indexOf(i) !== -1;
    })
  }).filter(item => !item)

  return filtered.length;
};
