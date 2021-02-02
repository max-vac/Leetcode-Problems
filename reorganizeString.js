// 767. Reorganize String

// Given a string S, check if the letters can be rearranged so that two characters that are adjacent to each other are not the same.

// If possible, output any possible result.  If not possible, return the empty string.

// Example 1:

// Input: S = "aab"
// Output: "aba"
// Example 2:

// Input: S = "aaab"
// Output: ""

var reorganizeString = function(S) {
  //create a variable letterObj set to abn empty object
  //create variable maxLetter set to an empty string
  //create variable maxVal set to 0;

  //iterate over S
    //if not in letterObj then set it to 1 else increment the value

  //iterate over letterObj
    //if value is greater than maxVal
      //maxVal equals the  value
      //maxLetter equals the key
      //subtract one from the value of the letterObj


  //iterate over S
   //if letter equals and previous letter was not and there are more As
    //concat an a to the maxLetter and decrement
  //else if letter does not equal maxLetter
    //concat that letter

  //if (the value of maxLetter in letterObj is present)
    //return and empty string

  //return maxLetter;
};