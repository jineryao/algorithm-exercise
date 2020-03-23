/**
 * 56. 合并区间
 * 给出一个区间的集合，请合并所有重叠的区间。
 * @link https://leetcode-cn.com/problems/merge-intervals/
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let seq = intervals.sort((a, b) => a[0] - b[0])
    let res = []
    intervals.forEach(interval => {
        if (res.length == 0 || res[res.length-1][1] < interval[0]) {
            res.push(interval)
        } else {
            res[res.length-1][1] = Math.max(res[res.length-1][1], interval[1])
        }
    })
    return res
};

merge([[1,3],[8,10],[2,6],[15,18]])