// 19. Remove Nth Node From End of List

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

var removeNthFromEnd = function (head, n) {
  let currentNode = head;
  let listLength = 0;

  while (currentNode) {
    currentNode = currentNode.next;
    listLength++;
  }

  let counter = listLength - n;

  if (!counter) {
    return head.next;
  }

  currentNode = head;

  while (counter > 0) {
    if (counter === 1) {
      currentNode.next = currentNode.next.next;
    }
    currentNode = currentNode.next;
    counter--;
  }

  return head;
};

// Success
// Details
// Runtime: 64 ms, faster than 99.77% of JavaScript online submissions for Remove Nth Node From End of List.
// Memory Usage: 39.1 MB, less than 99.58% of JavaScript online submissions for Remove Nth Node From End of List.
