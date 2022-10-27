/*
 * @lc app=leetcode.cn id=506 lang=typescript
 *
 * [506] 相对名次
 */

// @lc code=start
function findRelativeRanks(score: number[]): string[] {
    let tmp = JSON.parse(JSON.stringify(score))
    let sort = score.sort((a,b) => b-a);
    score = tmp;
    let result:string[] = [];
    // console.log(sort)
    score.forEach((item,i) => {
        let idx = sort.findIndex((data) => {
            return data == item;
        })
        // console.log(`${item},${idx},`)
        if(idx==0) {
            result.push('Gold Medal')
        } else if(idx==1) {
            result.push('Silver Medal')
        } else if(idx==2) {
            result.push('Bronze Medal')
        } else {
            result.push(`${idx+1}`)
        }
    });
    // console.log(result)
    return result;
};
// @lc code=end
let arr = [1,3,2,5,4];
findRelativeRanks(arr)