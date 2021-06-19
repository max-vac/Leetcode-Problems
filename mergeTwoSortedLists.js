// 21. Merge Two Sorted Lists

// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// Example 1:

// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: l1 = [], l2 = []
// Output: []
// Example 3:

// Input: l1 = [], l2 = [0]
// Output: [0]

var mergeTwoLists = function (l1, l2) {
  //create variable mergedList set to a new NodeList
  //create head variable set to the mergedList for later use
  //while there is a l1 and a l2
  //if l1 val is less than l2 val
  //set mergedList.next equal to l1
  //set l1 to the next node in the l1 list
  //else
  //set mergedList.next to l2
  //set l2 to the next node in the l2 list
  //set mergedList to the next node of the mergedList
  //if l1 is null
  //mergedList.next will be the remainder of l2
  //if l2 is null
  //mergeList.next will be the remainder of l1
  //return the variable head.next so that you remove the initial empty node
};
