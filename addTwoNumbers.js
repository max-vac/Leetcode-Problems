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
  //create firstCurrent set to l1;
  //create secondCurrent set to l2;
  //create variable firstCount set to 0;
  //create variable secondCount set to 0;
  //create variable firstSum set to 0;
  //create variable secondSum set to 0;
  //create variable totalSum set to 0;
  //create variable sumArr set to an empty array

  //while l1 has a next property
    //set firstSum to its current value plus the val times 10 to the current count
    //traverse l1
    //increment firstCount by one
  //while l2 has a next property
    //set secondSum to its current value plus the val times 10 to the current count
    //traverse l2
    //increment secondCount by one

  //set totalSum to the value of firstSum plus secondSum converted to a string

  //iterate over totalSum
    //push values to sumArr and convert them to number using parseInt

  //return arrNum
};