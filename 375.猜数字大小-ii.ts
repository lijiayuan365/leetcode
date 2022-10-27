/*
 * @lc app=leetcode.cn id=375 lang=typescript
 *
 * [375] 猜数字大小 II
 */

// @lc code=start
function getMoneyAmount(n: number): number {
    const f = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
    console.log(f)
    for (let i = n - 1; i >= 1; i--) {
        for (let j = i + 1; j <= n; j++) {
            let minCost = Number.MAX_VALUE;
            for (let k = i; k < j; k++) {
                let cost = k + Math.max(f[i][k - 1], f[k + 1][j]);
                // console.log('cost:'+cost)
                minCost = Math.min(minCost, cost);
            }
            f[i][j] = minCost;
        }
        console.log(`${i}:${JSON.stringify(f)}`)
    }
    console.log(f)
    return f[1][n];
};
// @lc code=end
console.log(getMoneyAmount(3));

