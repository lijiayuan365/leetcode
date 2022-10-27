/*
 * @lc app=leetcode.cn id=997 lang=typescript
 *
 * [997] 找到小镇的法官
 */

// @lc code=start
function findJudge(n: number, trust: number[][]): number {
    let map = new Map();
    let map2 =new Map();
    for(let i = 1; i <= n; i++) {
        map.set(i,0)
        map2.set(i,0)
    }
    trust.forEach(item => {
        // console.log(item)
        let key = map.get(item[1])
        map.set(item[1],key+1)
        map2.set(item[0],item[1])
    })
    // console.log(map)
    for(let item of map.keys()) {
        if(map.get(item)>=n-1&&map2.get(item)==0) {
            return item
        }
    }
    return -1;
};
// @lc code=end

let data = findJudge(3,[[1,2],[2,3]])
// let data = findJudge(3,[[1,3],[2,3],[3,1]])
// let data = findJudge(3,[[1,3],[2,3]])
console.log(data)

