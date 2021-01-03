500. Keyboard Row

Example:

Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]

var findWords = function(words) {
  let key = {
    q: 1, w: 1, e: 1, r: 1, t: 1,y: 1,u: 1,i: 1,o: 1,p: 1, a: 2,s: 2,d: 2,f: 2,g: 2,h: 2,j: 2,k: 2,l: 2,z: 3,x: 3,c: 3,v: 3,b: 3,n: 3,m: 3
  };
  let matchedWords = [];

  for (let i = 0; i < words.length; i++) {
    let lowerCaseWord = words[i].toLowerCase();
    let sum = 0;

    for (let j = 0; j < lowerCaseWord.length; j++) {
      sum += key[lowerCaseWord[j]];
      if (j === lowerCaseWord.length - 1 && sum === lowerCaseWord.length * key[lowerCaseWord[j]]) {
        matchedWords.push(words[i])
      }
    }
  }
  return matchedWords
};

// Success
// Details
// Runtime: 68 ms, faster than 97.27% of JavaScript online submissions for Keyboard Row.
// Memory Usage: 38.7 MB, less than 9.29% of JavaScript online submissions for Keyboard Row.