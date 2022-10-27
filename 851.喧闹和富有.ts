/*
 * @lc app=leetcode.cn id=851 lang=typescript
 *
 * [851] 喧闹和富有
 */

// @lc code=start
function loudAndRich(richer: number[][], quiet: number[]): number[] {
    let len = quiet.length;
    const map: number[][] = [];
    for (let i = 0; i < len; i++) {
        map[i] = [];
    }
    richer.forEach(item => {
        map[item[1]].push(item[0])
    })
    console.log(map)

    let res = new Array(len).fill(-1);
    for (let i = 0; i < len; i++) {
        let data = dfs(i, quiet, map, res);
        console.log(i+'+'+data)
    }
    return res;
};

function dfs(x: number, quiet: number[], g: any, ans: number[]):any {
    // if (ans[x] !== -1) {
    //     return [];
    // }
    // ans[x] = x;
    console.log('map+')
    // console.log(g)
    console.log(g[x])
    // if(g[x]) {
    //     return []
    // }
    if (g[x].length==0) {

        return []
    }
    let res = JSON.parse(JSON.stringify(g[x]));
    res.length&&res.forEach((item:any) => {
        console.log('变量'+item)
        res.push(...dfs(item, quiet, g, ans))
    });
    // for (const y of g[x]) {

    //     // console.log(g[x])
        
    //     // return g[x].push(dfs(y, quiet, g, ans));
    //     // if (quiet[ans[y]] < quiet[ans[x]]) {
    //     //     ans[x] = ans[y];
    //     // }
    // }
    // console.log(res)
};
// @lc code=end

const richer = [[1, 0], [2, 1], [3, 1], [3, 7], [4, 3], [5, 3], [6, 3]];
const quiet = [3, 2, 5, 4, 6, 1, 7, 0]
loudAndRich(richer, quiet)