/**
 * 1、判断前一位的原始值是否小于基准值：小于则舍弃； 大于则当前值 = 当前值 + 上一位的值，得出到当前索引时的最佳组合
 * 2、对比当前值 & 最大值，保留最大值
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	let max = nums[0]
	for (let i = 1, len = nums.length; i < len; i++) {
		if (nums[i - 1] > 0) nums[i] += nums[i - 1]
		max = Math.max(nums[i], max)
	}
	return max
}

/**
 * 1、对比 当前值 & 从0到此的和，如果当前值大，那么则保留当前值、忽律之前的和。反之保留总和。
 * 2、修正历史最佳
 * @date 2020-01-12
 * @param {any} nums
 * @returns {any}
 */
var maxSubArray2 = function(nums) {
	let curr = nums[0]
	let max = nums[0]

	for (let i = 1, len = nums.length; i < len; i++) {
		curr = Math.max(nums[i], curr + nums[i])
		max = Math.max(max, curr)
	}
	return max
}

console.log(maxSubArray2([-3, -2, 4, -1, 2, -1, 0]))
