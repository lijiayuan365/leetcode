/*
 * @lc app=leetcode.cn id=807 lang=typescript
 *
 * [807] 保持城市天际线
 */

// @lc code=start
function maxIncreaseKeepingSkyline(grid: number[][]): number {
    let iMax:number[] = [];
    let jMax:number[] = [];
    // for(let i=)
    grid.forEach(item => {
        iMax.push(Math.max(...item))
    })
    let len = grid[0].length;
    // let 
    for(let j=0;j<len;j++) {
        let max = grid[0][j]
        for(let i=0;i<grid.length;i++) {
            max= Math.max(grid[i][j],max)
        }
        jMax.push(max)
    }
    // console.log(iMax)
    // console.log(jMax)
    let result = 0
    for(let i=0;i<grid.length;i++) {
        for(let j=0;j<len;j++) {
            let key = Math.min(iMax[i],jMax[j])
            result += key-grid[i][j]
        }
    }
    return result;
};
// @lc code=end
// let arr = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
let arr = [[0,0,0],[0,0,0],[0,0,0]]
console.log(maxIncreaseKeepingSkyline(arr))

