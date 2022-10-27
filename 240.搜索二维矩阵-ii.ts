/*
 * @lc app=leetcode.cn id=240 lang=typescript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
    let m = matrix.length;
    let n = matrix[0].length;

    //小优化1：全局最值判断
    if(matrix[0][0]>target || matrix[m-1][n-1]<target) {
        return false;
    }
    //定位行
    for(let i=0;i<m;i++) {
        let row = matrix[i];
        //小优化2：提前结束循环
        if(row[0]>target)break;
        if(row[0]<=target && row[n-1]>=target) {
            //本行二分搜索
            let l = 0, h = n-1;
            while(l<=h) {
                let mid = Math.floor((l+h)/2);
                if(row[mid] == target) {
                    return true;
                } else if(row[mid]>target) {
                    h = mid - 1;
                } else {
                    l = mid + 1;
                }
            }
        }
    }
    return false;
    // return false;
};
// @lc code=end
let arr = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
let res = searchMatrix(arr,19)
console.log(res)
