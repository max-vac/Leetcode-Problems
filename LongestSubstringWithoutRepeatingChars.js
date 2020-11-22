// 3. Longest Substring Without Repeating Characters
// 11/20/2020

// Given a string s, find the length of the longest substring without repeating characters.



// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0

var lengthOfLongestSubstring = function(s) {
  let start = 0;
  let longest = 0;
  let obj = {};

  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 0;
    }

    obj[s[i]]++;

    if (Object.values(obj).includes(2)) {
      obj[s[start]]--;
      start++;
    }

    longest = Math.max(longest, (i - start) + 1)
  }

  return longest;
};