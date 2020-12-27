// 136. Single Number

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

var singleNumber = function(nums) {
  let sortedNums = nums.sort((a, b) => {
    return a - b;
  })

  for (let i = 0; i < sortedNums.length; i += 2) {
    if (sortedNums[i] !== sortedNums[i + 1]) {
      return sortedNums[i];
    }
  }
};

// Success
// Details
// Runtime: 96 ms, faster than 51.57% of JavaScript online submissions for Single Number.
// Memory Usage: 40.6 MB, less than 75.34% of JavaScript online submissions for Single Number.