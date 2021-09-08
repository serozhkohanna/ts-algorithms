# Linked List

### [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 
var mergeTwoLists = function(l1, l2) {
  if (!l1 || !l2) {
    return l1 || l2;
  };

  const linkThem = (smaller, greater) => {
    smaller.next = mergeTwoLists(smaller.next, greater);
    return smaller;
  };
  return l1.val < l2.val ? linkThem(l1, l2) : linkThem(l2, l1);
};
```

### [Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 
var deleteDuplicates = function(head) {
  let current = head;

  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }

  }
  return head;
};
```
