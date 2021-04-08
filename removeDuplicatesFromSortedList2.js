// 82. Remove Duplicates from Sorted List II
// Medium

// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

// Example 1:

// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]
// Example 2:

// Input: head = [1,1,1,2,3]
// Output: [2,3]

var deleteDuplicates = function (head) {
  let sentinel = new ListNode(0, head);
  let previousNode = sentinel;
  let currentNode = head;

  while (currentNode) {
    if (currentNode.next && currentNode.val === currentNode.next.val) {
      while (currentNode.next && currentNode.val === currentNode.next.val) {
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    } else {
      previousNode = previousNode.next;
    }
    currentNode = currentNode.next;
  }

  return sentinel.next;
};

// Success
// Details
// Runtime: 76 ms, faster than 97.90% of JavaScript online submissions for Remove Duplicates from Sorted List II.
// Memory Usage: 40.4 MB, less than 45.59% of JavaScript online submissions for Remove Duplicates from Sorted List II.
