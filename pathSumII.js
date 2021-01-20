// 113. Path Sum II

// Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where each path's sum equals targetSum.

// A leaf is a node with no children.

// Example 1:

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
// Output: [[5,4,11,2],[5,8,4,5]]
// Example 2:

// Input: root = [1,2,3], targetSum = 5
// Output: []
// Example 3:

// Input: root = [1,2], targetSum = 0
// Output: []

var pathSum = function(root, targetSum) {
  //create sums variable set to an empty array
  //if no node then return sums

  //make call to dfs helper function with params (node, [], sum, targetSum)
  //return sums
};

//create dfs function with params (node, sums, nums, target)
  //add node val to sum
  //push val to nums
  //if no children
    //if sum === target
    //push nums to sums

  //if(node.left)
    //call dfs with node.left, sums, nums, target
  //if(node.right)
        //call dfs with node.right, sums, nums, target

