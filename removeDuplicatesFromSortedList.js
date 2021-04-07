// 83. Remove Duplicates from Sorted List
// Easy

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:

// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

var deleteDuplicates = function (head) {
  let currentNode = head;
  let previousNode = head;

  while (currentNode) {
    if (currentNode.val === previousNode.val) {
      previousNode.next = currentNode.next;
      currentNode = currentNode.next;
    } else {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  return head;
};

// Success
// Details
// Runtime: 88 ms, faster than 79.96% of JavaScript online submissions for Remove Duplicates from Sorted List.
// Memory Usage: 40.2 MB, less than 83.45% of JavaScript online submissions for Remove Duplicates from Sorted List.
