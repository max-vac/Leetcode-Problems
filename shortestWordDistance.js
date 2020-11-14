//243. Shortest Word Distance
//11/13/2020
// Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

// Example:
// Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

// Input: word1 = “coding”, word2 = “practice”
// Output: 3
// Input: word1 = "makes", word2 = "coding"
// Output: 1

var shortestDistance = function(words, word1, word2) {
  let result = Infinity;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) {
      for (let j = 0; j < words.length; j++) {
        if (words[j] === word2) {
          let num = Math.abs(i - j);
          if (num < result) {
            result = num;
          }
        }
      }
    }
  }
  return result;
};

//Success
// Runtime: 80 ms, faster than 73.37% of JavaScript online submissions for Shortest Word Distance.
// Memory Usage: 39.6 MB, less than 77.51% of JavaScript online submissions for Shortest Word Distance.