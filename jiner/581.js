/**
 * 排序完后，前后对比
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
	let len = nums.length
	let tem = [...nums]
	nums.sort((a, b) => a - b)
	let start = null
	let end = null
	for (let i = 0; i < len; i++) {
		if (nums[i] !== tem[i]) {
            start = i
            break
		}
	}
	for (let i = len - 1; i > start; i--) {
		if (nums[i] !== tem[i]) {
            end = i + 1
            break
		}
	}
	return Math.abs(end - start)
}

/**
 * 从左到右得出非正确排序最大值的位置
 * 从右到左得出非正确排序最小值的位置
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray2 = function(nums) {
	let len = nums.length
	let l = 0
	let r = -1
	let max = nums[0]
	let min = nums[len - 1]
	for (let i = 0; i < len; i++) {
		if (max > nums[i]) {
			r = i
		} else {
			max = nums[i]
		}
	}
	for (let i = len - 1; i >= 0; i--) {
		if (min < nums[i]) {
			l = i
		} else {
			min = nums[i]
		}
    }
	return r - l + 1
}

/**
 * 一次循环，左右边界同步对比
 * @date 2020-01-05
 * @param {any} nums
 * @returns {any}
 */
var findUnsortedSubarray3 = function(nums) {
	let len = nums.length
	let l = 0
	let r = -1
	let max = nums[0]
	let min = nums[len - 1]
	for (let i = 0; i < len; i++) {
		if (max > nums[i]) {
			r = i
		} else {
			max = nums[i]
		}
		if (min < nums[len - i - 1]) {
			l = len - i - 1
		} else {
			min = nums[len - i - 1]
		}
    }
	return r - l + 1
}
// [1, 3, 2, 2, 2] [1, 2, 3, 4, 5] [5, 4, 3, 2, 1]
console.log(findUnsortedSubarray2([5, 4, 3, 2, 1]))
