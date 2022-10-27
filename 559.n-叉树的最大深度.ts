/*
 * @lc app=leetcode.cn id=559 lang=typescript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

function maxDepth(root: Node | null): number {
    if (!root) {
        return 0;
    }
    const queue = [];
    queue.push(root);
    let ans = 0;
    while (queue.length) {
        let size = queue.length;
        while (size > 0) {
            const node = queue.shift();
            const children = node.children;
            for (const child of children) {
                queue.push(child);
            }
            size--;
        }
        ans++;
    }
    return ans;
};
// @lc code=end

