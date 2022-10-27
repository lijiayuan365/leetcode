/*
 * @lc app=leetcode.cn id=496 lang=typescript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    let res = []
    let map:any = {}
    // nums2.sort();
    // nums2.forEach(((item,i)=> {
    //     map[`${item}`] = i;
    // }))
    console.log(map)
    for(let i=0;i<nums1.length;i++) {
        let idx = nums2.findIndex(item => item==nums1[i])
        // console.log(idx)
        for(let j=idx;j<nums2.length;j++) {
            if(nums2[j]>nums1[i]) {
                res.push(nums2[j])
                break;
            }
            
        }
        if(res.length-1<i) {
            res.push(-1)    
        }
        // if(idx==nums2.length-1) {
        //     res.push(-1)
        // } else {

        //     res.push(nums2[idx+1])
        // }
    }
    return res;
};
// @lc code=end

let num1 = [4,1,2]
let num2 = [1,3,4,2]
let data = nextGreaterElement(num1,num2);
console.log(data)