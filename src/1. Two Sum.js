/*
Link: https://leetcode.com/problems/two-sum/
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    const secondNumIndex = map[target - value];

    if (secondNumIndex !== undefined) {
      return [secondNumIndex, i];
    }
    map[value] = i;
  }
  return [-1, -1];
};

console.log(twoSum([2, 7, 11, 15], 9));
