// 257. Binary Tree Paths

// Given a binary tree, return all root-to-leaf paths.

// Note: A leaf is a node with no children.

// Example:

// Input:

//    1
//  /   \
// 2     3
//  \
//   5

// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3

var binaryTreePaths = function(root) {
  //create a paths variable set to an empty array

  //if there is no root (aka its an empty tree)
    //return paths (an empty array)

  //call the helper function dfs with three params (root, an empty string and the paths array)
  //return the paths array
}

//create helper function called dfs with the params node, path(singular), and the paths(the array with lists of paths)
  //add the current node value to the path variable

  //if there are no children (no left or right node)
    //then we have reached a leaf and need to add the path to the paths array

  //add the -> to the paths casue there are more node values to add to the current path
  //if theres a left node
    //call dfs with node.left, path, and paths
  //if theres a right node
    //call dfs with right.node, path, and paths