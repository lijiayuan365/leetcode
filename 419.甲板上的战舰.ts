/*
 * @lc app=leetcode.cn id=419 lang=typescript
 *
 * [419] 甲板上的战舰
 */

// @lc code=start
function countBattleships(board: string[][]): number {
    let num = 0;
    for(let i= 0;i<board.length; i++) {
        let item = board[i]
        for(let j=0;j<board[0].length;j++) {
            if(item[j]=='X') {
                item[j] = '.';
                for (let k = j + 1; k < item.length && board[i][k] === 'X'; ++k) {
                    board[i][k] = '.';
                }                    
                for (let k = i + 1; k < board.length && board[k][j] === 'X'; ++k) {
                    board[k][j] = '.';
                }
                num+= 1;
            }
        }
    }
    return num;
};
// @lc code=end

