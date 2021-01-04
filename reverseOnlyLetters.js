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
  //create letterStack set to empty array
  //create symbolQueue set to empty array
  //create resultString set to empty string

  //iterate over array
    //if character code is greater than or equal to 65 and less than or equal to 90 or greater than or equal to 97 and less than or equal to 122
      //push the value onto letterStack
    //else
      //push the value onto the symbolQueue;

  //iterate over array again
    //if character code is greater than or equal to 65 and less than or equal to 90 or greater than or equal to 97 and less than or equal to 122
      //add popped value from letterStack to resultString
    //else
      //add shifted value to the resultString

  //return resultString;
};