// 824. Goat Latin

// A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.

// We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

// The rules of Goat Latin are as follows:

// If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
// For example, the word 'apple' becomes 'applema'.

// If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
// For example, the word "goat" becomes "oatgma".

// Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
// For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
// Return the final sentence representing the conversion from S to Goat Latin.



// Example 1:

// Input: "I speak Goat Latin"
// Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
// Example 2:

// Input: "The quick brown fox jumped over the lazy dog"
// Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"

var toGoatLatin = function(S) {
  let resultString = [];
  let splitString = S.split(' ');
  let vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  }

  for (let i = 0; i < splitString.length; i++) {
    let splitWord = splitString[i].split('');
    let count = i + 1

    while ((count) > 0) {
      if (!vowels[splitWord[0]] && count === i + 1) {
        let first = splitWord.shift()
        splitWord.push(first)
      }

      if (count === i + 1) {
        splitWord.push('ma');
      }

      splitWord.push('a');
      count--;
    }
    resultString.push(splitWord.join(''))
  }
  return resultString.join(' ');
};

// Success
// Details
// Runtime: 80 ms, faster than 60.00% of JavaScript online submissions for Goat Latin.
// Memory Usage: 40.3 MB, less than 12.00% of JavaScript online submissions for Goat Latin.