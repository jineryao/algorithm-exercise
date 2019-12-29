/**
 * 标记法
 * 注意：for in 获取的key会转为string类型
 */
function findDisappeared(nums) {
	let res = []
	let temIndex
	for (let i = 0; i < nums.length; i++) {
		temIndex = Math.abs(nums[i]) - 1
		if (nums[temIndex] > 0) {
			nums[temIndex] *= -1
		}
    }
	for (let i = 0; i < nums.length; i++) {
		nums[i] > 0 && res.push(i + 1)
	}
	return res
}

console.log(findDisappeared([3, 11, 8, 16, 4, 15, 4, 17, 14, 14, 6, 6, 2, 8, 3, 12, 15, 20, 20, 5]))
