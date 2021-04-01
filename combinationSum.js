// 39. Combination Sum
// Medium

// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

// Example 1:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
// Example 2:

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]
// Example 3:

// Input: candidates = [2], target = 1
// Output: []
// Example 4:

// Input: candidates = [1], target = 1
// Output: [[1]]
// Example 5:

// Input: candidates = [1], target = 2
// Output: [[1,1]]

var combinationSum = function (candidates, target) {
  //create result variable set to an empty array to collect the arrays from helper function
  //create helper function getCombinations
  //getCombinations has params start, sum, currentArr
  //if the sum equals the target the push the currentArr copy into the result array
  //if the sum is larger than the target then return
  //loop over the candidates array set i to the start which will be 0 by default
  //push the value at index i in the candidate to the currentArr array
  //call thew getCombinations function with the start set to i, the sum set to sum + the value at candidate i, and the currentArr
  //remove the last value of the currentArr
  //initiate the getCombinations function(all values will be set in the default)
  //return result array
};
