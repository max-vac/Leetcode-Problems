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
  //create currentNode variable set to the head
  //create listLength variable set to 0;
  //while there i a currentNode
  //set currentNode to currentNode.next
  //increment listLength by 1
  //create counter variable set to the listLength variable minus n
  //if counter is equal to 0
  //return head.next
  //reset currentNode to head
  //while counter is greater than 0
  //if counter is equal to one
  //set the currentNode.next to currentNode.next.next
  //else
  //set currentNode to currentNode.next
  //decrement counter
  //return head
};
