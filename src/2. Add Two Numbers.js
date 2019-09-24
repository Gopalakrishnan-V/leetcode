/*
Link: https://leetcode.com/problems/add-two-numbers/
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let resHead = null;
  let resTail = null;
  let carry = 0;

  while (l1 || l2) {
    let sum = 0;
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    sum += carry;
    carry = 0;

    if (sum > 9) {
      carry += 1;
      sum -= 10;
    }
    if (!resHead) {
      resHead = new ListNode(sum);
      resTail = resHead;
    } else {
      resTail.next = new ListNode(sum);
      resTail = resTail.next;
    }
  }
  if (carry > 0) {
    resTail.next = new ListNode(carry);
    resTail = resTail.next;
    carry = 0;
  }
  return resHead;
};

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log(addTwoNumbers(l1, l2));
