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
  if (!root) return true;

  return dfs(root.left, root.right);
};

let dfs = (node1, node2) => {
  if (!node1 && !node2) return true;
  if (!node1 || !node2) return false;

  return (node1.val === node2.val)
    && dfs(node1.left, node2.right)
    && dfs(node1.right, node2.left);
}

// Success
// Details
// Runtime: 80 ms, faster than 97.11% of JavaScript online submissions for Symmetric Tree.
// Memory Usage: 40.6 MB, less than 27.72% of JavaScript online submissions for Symmetric Tree.