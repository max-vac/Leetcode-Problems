// 1662. Check If Two String Arrays are Equivalent
// 11/24/2020

// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.



// Example 1:

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.
// Example 2:

// Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
// Output: false
// Example 3:

// Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
// Output: true

var arrayStringsAreEqual = function(word1, word2) {
  return word1.reduce((acc, val) => acc += val) === word2.reduce((acc, val) => acc +=val);
}

// Runtime: 72 ms, faster than 90.53% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
// Memory Usage: 38.5 MB, less than 81.82% of JavaScript online submissions for Check If Two String Arrays are Equivalent.

var arrayStringsAreEqual = function(word1, word2) {
  let concatWord1 = '';
  let concatWord2 = '';

  for (let word of word1) {
    concatWord1 += word;
  }

  for (let word of word2) {
    concatWord2 += word;
  }

  return concatWord1 === concatWord2;
};

// Runtime: 76 ms, faster than 79.92% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
// Memory Usage: 38.9 MB, less than 22.35% of JavaScript online submissions for Check If Two String Arrays are Equivalent.