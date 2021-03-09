// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true

var isValid = function (s) {
  const closingBrackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  let openingBracketsStack = [];

  for (let i = 0; i < s.length; i++) {
    console.log(openingBracketsStack);
    if (!closingBrackets[s[i]]) {
      openingBracketsStack.push(s[i]);
    } else {
      console.log('the else statment: ', s[i]);
      if (closingBrackets[s[i]] !== openingBracketsStack.pop()) return false;
    }
  }

  return openingBracketsStack.length ? false : true;
};

// Success
// Details
// Runtime: 72 ms, faster than 95.80% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 38.5 MB, less than 93.87% of JavaScript online submissions for Valid Parentheses.
