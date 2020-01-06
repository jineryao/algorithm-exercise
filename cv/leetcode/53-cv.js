/**
 * 53. 最大子序和
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * @link https://leetcode-cn.com/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums || nums.length == 0) 
        return null
    let maxSum = nums[0], currSum = nums[0]
    for (let i=1; i<nums.length; i++) {
        // 求连续最大和。 除非当前值比之前的和大，否则之前的和一定保留。
        currSum = Math.max(nums[i], currSum + nums[i])
        maxSum = Math.max(maxSum, currSum)
    }
    return maxSum
};

maxSubArray([1])
