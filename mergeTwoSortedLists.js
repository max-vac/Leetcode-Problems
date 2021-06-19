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
  let mergedList = new NodeList();
  let head = mergedList;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      mergedList.next = l1;
      l1 = l1.next;
    } else {
      mergedList.next = l2;
      l2 = l2.next;
    }

    mergedList = mergedList.next;
  }

  if (!l1) mergedList.next = l2;
  if (!l2) mergedList.next = l1;

  return head.next;
};

// Success
// Details
// Runtime: 76 ms, faster than 99.46% of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 40.5 MB, less than 30.82% of JavaScript online submissions for Merge Two Sorted Lists.
