/*
 * @lc app=leetcode.cn id=786 lang=typescript
 *
 * [786] 第 K 个最小的素数分数
 */

// @lc code=start
function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
    let min = 0;
    let arr1 = [];
    let res = [1,2]
    for(let i=0;i<arr.length-1;i++) {
        for(let j=i+1;j<arr.length;j++) {
            // if(min)
            arr1.push({min:arr[i],max:arr[j],val:arr[i]/arr[j]})
        }
    }
    arr1 = arr1.sort((a:any,b:any) =>{
        return a.val-b.val
    })
    // arr
    // console.log(arr1)
    return [arr1[k-1].min,arr1[k-1].max];
};
// @lc code=end
kthSmallestPrimeFraction([1,2,3,4,5],1)

