// 给出一个区间的集合，请合并所有重叠的区间。

// 示例 1:

// 输入: [[1, 3], [2, 6], [8, 10], [15, 18]]
// 输出: [[1, 6], [8, 10], [15, 18]]
// 解释: 区间[1, 3] 和[2, 6] 重叠, 将它们合并为[1, 6].
//     示例 2:

// 输入: [[1, 4], [4, 5]]
// 输出: [[1, 5]]
// 解释: 区间[1, 4] 和[4, 5] 可被视为重叠区间。
var merge = function (intervals) {
    if (intervals.length){
        // 先把数组从小到大重新排序
        intervals.sort((a, b) => {
            if (a[0] !== b[0]) {
                return a[0] - b[0];
            }
            return a[1] - b[1];
        });
        let len = intervals.length,
            ans = [], // 区间数组
            start, end;
        for (let i = 0; i < len; i++) {
            let s = intervals[i][0],
                e = intervals[i][1];
            if (start === undefined) {
                start = s, end = e;
            } else if (s <= end) {
                end = Math.max(e, end);
            } else {
                let part = [start, end];
                ans.push(part);
                start = s;
                end = e;
            }
        }
        if (start !== undefined) {
            let part = [start, end];
            ans.push(part);
        }
        return ans;
    }
};
console.log([[1,5]].length)