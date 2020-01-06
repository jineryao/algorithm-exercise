/**
 * 62. 不同路径
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 * 问总共有多少条不同的路径？
 * @link https://leetcode-cn.com/problems/unique-paths
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // 直接维护每步的可能性
    let step = new Array(n).fill(1)
    for (var i=1; i<m; i++) {
        for (var r=1; r<n; r++) {
            step[r] = step[r] + step[r-1]    
        }
    }
    return step[n-1]
};
