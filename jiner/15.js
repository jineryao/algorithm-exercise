/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	if (!nums || nums.length < 3) return []
	let tem = {}
	let res = []
	nums.sort((a, b) => a - b)
	for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] > 0) break
		for (let y = i + 1; y < len - 1; y++) {
            if (nums[i] === nums[y]) continue
			for (let z = y + 1; z < len; z++) {
				if (nums[i] + nums[y] + nums[z] === 0) {
                    let arr = [nums[i], nums[y], nums[z]]
                    arr.sort((a, b) => a - b)
                    tem[arr.join('')] = arr
                }
			}
		}
	}
	return Object.values(tem)
}
/**
 * 进行初始升序排列
 * 进行循环：锁定初始数字i的索引，建立左右边界索引 j、k；
 * 使用j、k边界进行数据匹配，当和<0时，j向中间靠近（j+1)，当和>0时，k向中间靠近（k-1)；
 * 当i的值与上一位i-1的值相同，说明已经处理过，直接跳下一位（i+1）
 * 同理j的值相同跳过步骤
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum2 = function(nums) {
	nums = nums.sort((a, b) => a - b)
	let res = []
	for (let i = 0; i < nums.length - 2; i++) {
		if (i >= 1 && nums[i] === nums[i - 1]) continue
		let j = i + 1
		let k = nums.length - 1
		while (j < k) {
			let sum = nums[i] + nums[j] + nums[k]
			if (sum === 0) {
				res.push([nums[i], nums[j], nums[k]])
				j++
				while (nums[j - 1] === nums[j]) {
					j++
				}
			} else if (sum < 0) {
				j++
			} else {
				k--
			}
		}
	}
	return res
}

console.log(threeSum([-11, -2, 0, 1, 2, 3, 4]))
