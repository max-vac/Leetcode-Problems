// 101. Symmetric Tree

// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3

var isSymmetric = function(root) {
  //if no root then return true

  //return call dfs helper function with left node and right node as params
};

let dfs = (node1, node2) => {
  //if neither node1 && node2 return true
  //if if node1 or node2 is null then return false;
  //return if the val of node1 and node2 are the same
    //and call dfs on node1 left and node2 right
    //and call dfs on node1 right and node2 left
}