# Linked List

### [Number of Recent Calls](https://leetcode.com/problems/number-of-recent-calls/)

```
let RecentCounter = function() {
  this.array = [];
};

/**
 * @param {number} t
 * @return {number}
 */
 
RecentCounter.prototype.ping = function(t) {
  this.array.push(t);

  while (this.array[0] < t - 3000) {
    this.array.shift();
  }

  return this.array.length;
};
```

### [First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/)

```
/**
 * @param {string} s
 * @return {number}
 */
 
let firstUniqChar = function(s) {
  for (i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};
```
