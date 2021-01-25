// 383. Ransom Note

// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

var canConstruct = function(ransomNote, magazine) {
  let obj = {};

  for (let letter of magazine) {
       (!obj[letter]) ? obj[letter] = 1 : obj[letter]++;
  }

  for (let letter of ransomNote) {
      if (!obj[letter]) {
          return false
      }
          obj[letter]--;

  }

  return true;
};

// Success
// Details
// Runtime: 104 ms, faster than 63.29% of JavaScript online submissions for Ransom Note.
// Memory Usage: 41.5 MB, less than 73.67% of JavaScript online submissions for Ransom Note.