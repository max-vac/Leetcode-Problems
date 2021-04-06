// 14. Longest Common Prefix
// Easy

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
  let strSorted = strs.sort((a, b) => a.length - b.length);
  let maxCount = Infinity;

  for (let i = 1; i < strSorted.length; i++) {
    let index = 0;
    let count = 0;
    while (index < strSorted[0].length) {
      if (strSorted[i][index] === strSorted[0][index]) {
        count++;
      }
      index++;
    }
    maxCount = Math.min(maxCount, count);
  }
  return strSorted[0].slice(0, maxCount);
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
