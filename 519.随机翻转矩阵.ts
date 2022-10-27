/*
 * @lc app=leetcode.cn id=519 lang=typescript
 *
 * [519] 随机翻转矩阵
 */

// @lc code=start
class Solution {
    m;
    n;
    total;
    map;
    constructor(m: number, n: number) {
        this.m= m;
        this.n = n;
        this.total = m*n;
        this.map = new Map()
    }

    flip(): number[] {
        const x  = Math.floor(Math.random()*this.total);
        this.total--;
        const idx = this.map.get(x) || x;
        this.map.set(x,this.map.get(this.total)||this.total)
        return [Math.floor(idx/this.n),idx%this.n]
    }

    reset(): void {
        this.total = this.m * this.n;
        this.map.clear()
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(m, n)
 * var param_1 = obj.flip()
 * obj.reset()
 */
// @lc code=end

