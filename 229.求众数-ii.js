/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *
 * [229] 求众数 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    // let map = {}
    // let arr = [];
    // let len  = nums.length;
    // for(let i=0;i<len;i++) {
    //     if(map[nums[i]]) {
    //         map[nums[i]] += 1
    //     } else {
    //         map[nums[i]] = 1;
    //     }
    // }
    // for(const key in map) {
    //     if(map[key]>Math.floor(len/3)) {
    //         arr.push(key)
    //     }
    // }
    // return arr


    let numA = undefined, numB = undefined;
    let cntA = 0, cntB = 0;
    for(const num of nums){
        if(num === numA)
            cntA++;
        else if(num === numB)
            cntB++;
        else if(numA === undefined){
            numA = num;
            cntA++;
        }else if(numB == undefined){
            numB = num;
            cntB++;
        }else{
            cntA--;
            cntB--;
            if(cntA==0)
                numA = undefined;
            if(cntB==0)
                numB = undefined;
        }
    }
    cntA = cntB = 0;
    for(const num of nums){
        if(num == numA)
            cntA++;
        else if(num == numB)
            cntB++;
    }
    const ans = [];
    const s = Math.floor(nums.length/3);
    if(cntA > s)
        ans.push(numA);
    if(cntB > s)
        ans.push(numB);
    return ans;
};
console.log(majorityElement([3,2,3,1,4]))
// @lc code=end

