/*
 * @lc app=leetcode.cn id=453 lang=typescript
 *
 * [453] 最小操作次数使数组元素相等
 */

// @lc code=start
function minMoves(nums: number[]): number {
    let min:number = nums[0];
    let count:number = 0;
    for(let i=0;i<nums.length;i++) {
        if(nums[i]<min) {
            min = nums[i]
        }
        // console.log(`max:${count},min:${min}`)
    }
    for(let i=0;i<nums.length;i++) {
        count += nums[i]-min;
    }

    // return max-min;

    return count;
};
// @lc code=end

console.log(minMoves([1,2,3]))