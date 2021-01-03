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
  let wordsObj = {};
  let wordsResults = [];
  let fullList = A.split(' ').concat(B.split(' '));

  for (let word of fullList) {
    !wordsObj[word] ?
      wordsObj[word] = 1 :
      wordsObj[word]++;
  };

  for (let word in wordsObj) {
    if (wordsObj[word] === 1) {
      wordsResults.push(word);
    }
  };
  return wordsResults;
};

// Success
// Details
// Runtime: 80 ms, faster than 60.39% of JavaScript online submissions for Uncommon Words from Two Sentences.
// Memory Usage: 39.2 MB, less than 24.15% of JavaScript online submissions for Uncommon Words from Two Sentences.