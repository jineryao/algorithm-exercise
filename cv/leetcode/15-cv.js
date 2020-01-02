/**
 * 15. 三数之和
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
 * @link https://leetcode-cn.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = []
    if (nums == null || nums.length < 3)
        return res   
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) 
            break
        if (i > 0 && nums[i] == nums[i-1])
            continue
        let l = i + 1
        let r = nums.length - 1
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            if (sum == 0) {
                res.push([nums[i], nums[l], nums[r]])
                //去重
                while (l < r && nums[l] == nums[l+1]) l++;
                while (l < r && nums[r] == nums[r-1]) r--;
                l++
                r--
            } else if (sum > 0) {
                r--
            } else if (sum < 0) {
                l++
            }
        }
    }
    return res   
};

/**
 * [
  [-1, 0, 1],
  [-1, -1, 2]
]
 */
const res = threeSum([-1, 0, 1, 2, -1, -4])
console.log(res)