// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

var addTwoNumbers = function(l1, l2) {
  let firstCount = 0;
  let secondCount = 0;
  let firstSum = 0;
  let secondSum = 0;
  let sumLinkedList;

  while (l1) {
    firstSum += (10 ** firstCount) * l1.val;
    l1 = l1.next;
    firstCount++;
  }

  while (l2) {
    secondSum += (10 ** secondCount) * l2.val;
    l2 = l2.next;
    secondCount++;
  }
    console.log(typeof BigInt(firstSum))

  let totalSum = (parseInt(firstSum) + parseInt(secondSum)).toString();
  let totalCount = totalSum.length - 1;
  let totalCurrent;

  while (totalCount >= 0) {
      if (sumLinkedList === undefined) {
          sumLinkedList = new ListNode(parseInt(totalSum[totalCount]));
          totalCurrent = sumLinkedList;
          totalCount--;
      } else {
          totalCurrent.next = new ListNode(parseInt(totalSum[totalCount]));
          totalCurrent = totalCurrent.next;
          totalCount--;
      }
  }

  return sumLinkedList;
};