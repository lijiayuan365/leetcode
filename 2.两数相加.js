/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let a = 0;
    let b = 0;
    let l1l = l1.length;
    let l2l = l2.length;
    l1.forEach((item,i) => {
        if(i==0) {
            a += item
        } else {
            a += item*10*(l1l-i)
        }
    })
    l2.forEach((item,i) => {
        if(i==0) {
            b += item
        } else {
            b += item*10*(l2l-i)
        }
    })
    return a+b;
};
// @lc code=end

