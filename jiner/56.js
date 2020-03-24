/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
	intervals = intervals.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]))
	let i = 0
	for (let y = 1, len = intervals.length; y < len; y++) {
		if (intervals[i][1] >= intervals[y][0]) {
			intervals[i][1] = Math.max(intervals[i][1], intervals[y][1])
		} else {
			intervals[++i] = intervals[y]
		}
	}
	return intervals.slice(0, ++i)
}

console.log(
	merge([
		[1, 5],
		[2, 3],
	]),
)
// [[1, 5], [2, 3]]
// [[1,3],[2,6],[8,10],[15,18]]
