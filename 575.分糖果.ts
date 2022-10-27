/*
 * @lc app=leetcode.cn id=575 lang=typescript
 *
 * 206/206 cases passed (348 ms)
Your runtime beats 37.5 % of typescript submissions
Your memory usage beats 18.75 % of typescript submissions (59.2 MB)
 * [575] 分糖果
 */

// @lc code=start
function distributeCandies(candyType: number[]): number {
    let map:any = {};
    candyType.forEach(item => {
        if(!map[item]) {
            map[item] = 1;
        }
    })
    return Object.keys(map).length<Math.floor(candyType.length/2)?Object.keys(map).length:Math.floor(candyType.length/2);
    return 0;
};
// @lc code=end
let arr = [1,1,2,3]
let data = distributeCandies(arr)
console.log(data)
