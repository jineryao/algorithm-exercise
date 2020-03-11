/**
 * 循环数组，值=0时删除此元素并push(0)。
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
	for (let i = 0, len = nums.length; i < len; i++) {
		if (nums[i] === 0) {
            nums.splice(i, 1)
			nums.push(0)
            i--
            len--
		}
	}
	return nums
}

var moveZeroes2 = function(nums) {
    let j = 0
    let len = nums.length
    for (let i = 0; i < len; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i]
            j++
        }
    }
    while(j < len) {
        nums[j] = 0
        j++
    }
    return nums
}

console.log(moveZeroes2([0, 1, 0, 3, 12]))