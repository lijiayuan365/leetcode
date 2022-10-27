/*
 * @lc app=leetcode.cn id=677 lang=typescript
 *
 * [677] 键值映射
 */

// @lc code=start
class MapSum {
    map;
    constructor() {
        this.map = new Map()
    }

    insert(key: string, val: number): void {
        this.map.set(key, val);
    }

    sum(prefix: string): number {
        let res = 0;
    for (const s of this.map.keys()) {
        if (s.startsWith(prefix)) {
            res += this.map.get(s);
        }
    }
    return res;
    }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
// @lc code=end

