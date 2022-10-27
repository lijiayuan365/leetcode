/*
 * @lc app=leetcode.cn id=319 lang=typescript
 *
 * [319] 灯泡开关
 */

// @lc code=start
function bulbSwitch(n: number): number {
    return Math.floor(Math.sqrt(n + 0.5));
    // if(n==0) {
    //     return 0;
    // }else if(n==1) {
    //     return 1;
    // }

    // let arr = new Array(n).fill(1);
    // for(let i=2;i<=n;i++) {
    //     for(let j=0;j<arr.length;j++) {
    //         if((j+1)%i==0) {
    //             // console.log(`item:${arr[j]}`)
    //             arr[j] = arr[j]==1?0:1;
    //         }
    //     }
    //     // console.log(arr)
    // }
    // return arr.reduce((a,b)=>a+b);
};
// @lc code=end
console.log(bulbSwitch(99999))
