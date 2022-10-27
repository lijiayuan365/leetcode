/*
 * @lc app=leetcode.cn id=1005 lang=typescript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
function largestSumAfterKNegations(nums: number[], k: number): number {
    // let negaNum = 0;
    // let res = 0;
    // nums.sort((a,b) => {
    //     return Math.abs(a)-Math.abs(b)
    // })
    // nums.forEach(item => {
    //     if(item<0) {
    //         negaNum += 1;
    //     }
    // })
    // console.log(negaNum)
    // if(negaNum==0) {
    //     nums[0] =-nums[0]
    //     res =  nums.reduce((a,b)=> {
    //         return a+b
    //     })
    //     // for(let i=0)
    // }else if(negaNum==k||(k>negaNum&&(k-negaNum)%2==0)) {
    //     res =  nums.reduce((a,b)=> {
    //         return Math.abs(a)+Math.abs(b)
    //     })
    // } else if(negaNum>k) {
    //     // console.log(nums)
    //     for(let i=nums.length;i--;i<0) {
    //         if(nums[i]<0&&k>0) {
    //             // console.log(nums[i])
    //             res += Math.abs(nums[i]);
    //             k -= 1;
    //         } else {
    //             // console.log('a'+nums[i])
    //             res += nums[i]
    //         }
    //     }
    // } else {
    //     let k = 1;
    //     if(nums.includes(0)) {

    //         k = 0
    //     }
    //     console.log(nums)
    //     for(let i=0;i<nums.length;i++) {
    //         if(k>0&&nums[i]<0) {
    //             res += nums[i]
    //             k -= 1;
    //         } else {
    //             res += Math.abs(nums[i])
    //         }
    //     }
    // }
    // return res
    const freq = new Map();
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    let ans = _.sum(nums);
    for (let i = -100; i < 0; ++i) {
        if (freq.has(i)) {
            const ops = Math.min(k, freq.get(i));
            ans += (-i) * ops * 2;
            freq.set(i, freq.get(i) - ops);
            freq.set(-i, (freq.get(-i) || 0) + ops);
            k -= ops;
            if (k === 0) {
                break;
            }
        }
    }
    if (k > 0 && k % 2 === 1 && !freq.has(0)) {
        for (let i = 1; i <= 100; ++i) {
            if (freq.has(i)) {
                ans -= i * 2;
                break;
            }
        }
    }
    return ans;
};
// @lc code=end
// let arr = [3,-1,0,2];
// let num = 3;
let arr = [8,-7,-3,-9,1,9,-6,-9,3];
let num = 8;
console.log(largestSumAfterKNegations(arr,2))

