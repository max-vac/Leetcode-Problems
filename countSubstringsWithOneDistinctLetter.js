// 1180. Count Substrings with Only One Distinct Letter
// 12/04/2020

// Given a string S, return the number of substrings that have only one distinct letter.

// Example 1:

// Input: S = "aaaba"
// Output: 8
// Explanation: The substrings with one distinct letter are "aaa", "aa", "a", "b".
// "aaa" occurs 1 time.
// "aa" occurs 2 times.
// "a" occurs 4 times.
// "b" occurs 1 time.
// So the answer is 1 + 2 + 4 + 1 = 8.
// Example 2:

// Input: S = "aaaaaaaaaa"
// Output: 55

var countLetters = function(S) {
  let counter = 0;
  let j = 0;

  for (let i = 0; i < S.length; i++) {

    while (S[i] === S[j]) {
      counter++;
      j++;
    }

    j = i + 1;
  }

  return counter;
};

// Success
// Runtime: 88 ms, faster than 26.51% of JavaScript online submissions for Count Substrings with Only One Distinct Letter.
// Memory Usage: 39.3 MB, less than 33.73% of JavaScript online submissions for Count Substrings with Only One Distinct Letter.