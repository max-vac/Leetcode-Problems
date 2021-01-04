// 917. Reverse Only Letters

// Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

// Example 1:

// Input: "ab-cd"
// Output: "dc-ba"
// Example 2:

// Input: "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:

// Input: "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"

var reverseOnlyLetters = function(S) {
  let letterStack = [];
  let symbolQueue = [];
  let resultString = '';

  for (let i = 0; i < S.length; i++) {
    if ((S.charCodeAt(i) >= 65 && S.charCodeAt(i) <= 90) || (S.charCodeAt(i) >= 96 && S.charCodeAt(i) <= 122)) {
      letterStack.push(S[i]);
    } else {
      symbolQueue.push(S[i]);
    }
  }

  for (let i = 0; i < S.length; i++) {
    if ((S.charCodeAt(i) >= 65 && S.charCodeAt(i) <= 90) || (S.charCodeAt(i) >= 96 && S.charCodeAt(i) <= 122))   {
      resultString += letterStack.pop();
    } else {
      resultString += symbolQueue.shift();
    }
  }
  return resultString;
};

// Success
// Details
// Runtime: 76 ms, faster than 82.83% of JavaScript online submissions for Reverse Only Letters.
// Memory Usage: 40.7 MB, less than 8.08% of JavaScript online submissions for Reverse Only Letters.