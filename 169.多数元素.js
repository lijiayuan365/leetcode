/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // let arr = []
    // // let count = 0;
    // for(let i=0;i<nums.length;i++) {
    //     if(arr.length==0) {
    //         arr.push(nums[i])
    //     } else if(arr[0]!=nums[i]) {
    //         arr.shift()
    //     } else {
    //         arr.push(nums[i])
            
    //     }
    // }
    // return arr[0]
    let map = {}
    let arr = [];
    let len  = nums.length;
    for(let i=0;i<len;i++) {
        if(map[nums[i]]) {
            map[nums[i]] += 1
        } else {
            map[nums[i]] = 1;
        }
    }
    for(const key in map) {
        if(map[key]>Math.floor(len/2)) {
            arr.push(key)
        }
    }
    return arr
};
// @lc code=end

