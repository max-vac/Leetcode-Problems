// 35. Search Insert Position
// Easy

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
// Example 4:

// Input: nums = [1,3,5,6], target = 0
// Output: 0
// Example 5:

// Input: nums = [1], target = 0
// Output: 0

var searchInsert = function (nums, target) {
  //iterate though nums array
  //if value of nums array is equal to the target return the index
  //if value is both greater than the value of index -1 and less than value of index + 1
  //return index
  //if value is less than index and index is 0
  //return 0
  //if values is greater than index and index is equal to nums length
  //return num.length + 1
};
