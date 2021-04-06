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
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target || (nums[i - 1] < target && nums[i + 1] > target)) {
      return i;
    }

    if (nums[i] > target && i === 0) {
      return 0;
    }

    if (nums[i] < target && i === nums.length - 1) {
      return nums.length;
    }
  }
};

// Success
// Details
// Runtime: 76 ms, faster than 79.59% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 39.2 MB, less than 9.96% of JavaScript online submissions for Search Insert Position.
