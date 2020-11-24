// 760. Find Anagram Mappings
// 11/24/2020

// Given two lists Aand B, and B is an anagram of A. B is an anagram of A means B is made by randomizing the order of the elements in A.

// We want to find an index mapping P, from A to B. A mapping P[i] = j means the ith element in A appears in B at index j.

// These lists A and B may contain duplicates. If there are multiple answers, output any of them.

// For example, given

// A = [12, 28, 46, 32, 50]
// B = [50, 12, 32, 46, 28]
// We should return
// [1, 4, 3, 2, 0]

var anagramMappings = function(A, B) {
  let result = [];

  for (let num of A) {
      result.push(B.indexOf(num))
  }

  return result;
};

// Success
// Runtime: 80 ms, faster than 49.61% of JavaScript online submissions for Find Anagram Mappings.
// Memory Usage: 38.8 MB, less than 27.91% of JavaScript online submissions for Find Anagram Mappings.