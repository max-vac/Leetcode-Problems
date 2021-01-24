// 977. Squares of a Sorted Array

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

var sortedSquares = function(nums) {

  for (let i = 0; i < nums.length; i++) {
      nums[i] = nums[i]**2
  }
  return nums.sort((a, b) => a-b)
};

// Success
// Details
// Runtime: 120 ms, faster than 72.32% of JavaScript online submissions for Squares of a Sorted Array.
// Memory Usage: 45.5 MB, less than 25.36% of JavaScript online submissions for Squares of a Sorted Array.