// 98. Validate Binary Search Tree

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:

// Input: root = [2,1,3]
// Output: true
// Example 2:

// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

var isValidBST = function(root) {
  //return call to isValid helper function with three params (node/root, low(-Infinity), high(Infinity))
};

let isValid = (node, low, high) => {
  //if there is no node return true (does not affect outcome)
  //if (node val is less than low or node val is greater than high)
    //return false

  //return calls to isValid with the left node low and the node val for the new high
    //and call to isValid with the right node and the node.val for the new low and high
};