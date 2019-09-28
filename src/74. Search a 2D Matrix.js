/*
Link: https://leetcode.com/problems/search-a-2d-matrix/
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.

Example 1:
Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true

Example 2:
Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false
*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const rowsCount = matrix.length;
  if (!rowsCount) {
    return false;
  }
  const colsCount = matrix[0].length;
  let i = 0,
    j = 0;
  while (i < rowsCount && j < colsCount) {
    const current = matrix[i][j];
    if (current === target) {
      return true;
    }

    if (i !== rowsCount - 1 && matrix[i + 1][j] <= target) {
      i++;
    } else if (j !== colsCount - 1 && matrix[i][j + 1] <= target) {
      j++;
    } else {
      return false;
    }
  }
  return false;
};

console.log(
  searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 3)
);
