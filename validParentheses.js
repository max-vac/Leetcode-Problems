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
  //create an closingBrackets obj with the values of the closing bracket as keys and the opening bracket as the values
  //create an openingBracketsStack array to be used as a stack
  //iterate over the s variable
  //if the value is not in the closingBrackets obj
  //push it to the openingBracketsStack
  //else
  //if the value of the closingBrackets is not equal to the value of openingBrackets pop()
  //return false
  //return true
};
