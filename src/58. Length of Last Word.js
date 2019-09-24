/*
Link: https://leetcode.com/problems/length-of-last-word/
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', 
return the length of last word in the string.
If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:
Input: "Hello World"
Output: 5
*/

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function(s) {
  s = s.trim();
  for (let i = s.length - 1; i > 0; i--) {
    const c = s[i];
    if (c === " ") {
      return s.length - i - 1;
    }
  }
  return s.length;
};

console.log(lengthOfLastWord("Hello World"));
