/*
Link: https://leetcode.com/problems/implement-strstr/
Implement strStr().
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1
Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.
For the purpose of this problem, we will return 0 when needle is an empty string.
This is consistent to C's strstr() and Java's indexOf().
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(!needle.length){
      return 0;
  }
  
  const subStrLen = needle.length;
  let j = 0, index = -1;
  
  for(let i = 0; i<haystack.length; i++){
      const c = haystack[i];
      if(c === needle[j]){
          if(j === 0 ){
              index = i;
          }
          j++;
          if(j === subStrLen ){
              return  index;
          }
      }
      else{
        if(index!==-1){
          i = index;
        }
          j = 0;
          index = -1;
      }
  }
  return -1;
};

console.log(strStr("mississippi", "issip"));