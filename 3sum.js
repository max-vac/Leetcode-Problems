// 15. 3Sum

// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []

var threeSum = function(nums) {
  //create result variable set to an empty array

 //create variable j
 //create variable k


 //iterate over array nums
   //if value of i is equal to previous value
     //break;
   //set j to i + 1
   //set k to nums.length -1

 //while k > j
   //if addition of j, k , i < 0
     //increment j
   //else if addition is > 0
     //decrement k
   //else if addition is equal to 0
     //push array of values of i, j, k
     //break
};