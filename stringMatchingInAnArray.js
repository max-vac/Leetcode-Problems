// 1408. String Matching in an Array

// Given an array of string words. Return all strings in words which is substring of another word in any order.

// String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

// Example 1:

// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.
// Example 2:

// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".
// Example 3:

// Input: words = ["blue","green","bu"]
// Output: []

var stringMatching = function(words) {
  let result = new Set();
  let counter = 0

  let checkWord = (word) => {
    if (!word) {
      return
    }
    let pointer = 0;

    for (let i = 0; i < words.length; i++) {
      if (word !== words[i] || word.length > words[i].length) {
        while (pointer < words[i].length) {
          if (word === words[i].substring(pointer, (pointer + word.length))) {
            result.add(word);
          }
          pointer++;
        }
      }
      pointer = 0;
    }
    counter++
    checkWord(words[counter])
  }

  checkWord(words[counter])

  resultWords = [];
  for (let word of result) {
    resultWords.push(word)
  }

  return resultWords;
};

// Success
// Details
// Runtime: 92 ms, faster than 21.76% of JavaScript online submissions for String Matching in an Array.
// Memory Usage: 44 MB, less than 5.34% of JavaScript online submissions for String Matching in an Array.