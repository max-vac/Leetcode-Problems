// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

//solution 1 linear solution

var twoSum = function(nums, target) {
  let copyNums = nums.slice();
  nums = nums.sort((a, b) => a - b);
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    if (nums[start] + nums[end] === target) {
      return [copyNums.indexOf(nums[start]), copyNums.lastIndexOf(nums[end])];
    } else if ((nums[start] + nums[end]) > target) {
      end--;
    } else {
      start++;
    }
  }
};

// Success
// Details
// Runtime: 80 ms, faster than 63.62% of JavaScript online submissions for Two Sum.
// Memory Usage: 39.6 MB, less than 13.14% of JavaScript online submissions for Two Sum.

//solution #2 one pass with hash map

var twoSum = function(nums, target) {
  let counterPart = {};

  for (let i = 0; i < nums.length; i++) {
    let currentDif = target - nums[i];

    if (counterPart.hasOwnProperty(currentDif)) {
      return [i, counterPart[currentDif]]
    }
    counterPart[nums[i]] = i;
  }
};

// Success
// Details
// Runtime: 72 ms, faster than 94.30% of JavaScript online submissions for Two Sum.
// Memory Usage: 39 MB, less than 29.79% of JavaScript online submissions for Two Sum.