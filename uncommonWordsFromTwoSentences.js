884. Uncommon Words from Two Sentences

We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words.

You may return the list in any order.

Example 1:

Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]
Example 2:

Input: A = "apple apple", B = "banana"
Output: ["banana"]

var uncommonFromSentences = function(A, B) {
  //create wordsObj variable set to an empty array
  //create wordsResult variable set to an empty array

  //create fullList set to the split of A concatted with the split of B

  //iterate over the fullList
    //if not in wordsObj then set the value to 1 otherwise increment it by 1

  //iterate over the wordsResults
    //if value is equal to 1
      //push that value to the wordsResult array
};
