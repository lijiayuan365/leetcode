/*
 * @lc app=leetcode.cn id=598 lang=typescript
 *
 * [598] 范围求和 II
 */

// @lc code=start
function maxCount(m: number, n: number, ops: number[][]): number {
    if(ops.length==0) {
        return m*n
    }
    let x = ops[0][0];
    let y = ops[0][1];
    ops.forEach(item => {
        x = item[0]<x?item[0]:x;
        y = item[1]<y?item[1]:y;
    })
    return x*y;
};
// @lc code=end

let data = maxCount(3,4,[])
console.log(data)

