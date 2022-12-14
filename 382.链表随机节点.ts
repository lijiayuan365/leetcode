/*
 * @lc app=leetcode.cn id=382 lang=typescript
 *
 * [382] 链表随机节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class Solution {
    private arr = [];
    constructor(head: ListNode | null) {
        while(head){
            this.arr.push(head.val);
            head = head.next;
        }
    }

    getRandom(): number {
        return this.arr[Math.floor(Math.random() * this.arr.length)];
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
// @lc code=end

