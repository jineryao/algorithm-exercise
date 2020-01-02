/**
 * 581. 最短无序连续子数组
 * 给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。
 * 你找到的子数组应是最短的，请输出它的长度。
 * @link https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    rIndex = nums.length - 1
    let min = nums[rIndex], max = nums[0]
    let l = 0, r = -1
    nums.forEach((n, index) => {
        if (max > n) {
            r = index //右移右边界
        } else {
            max = n
        }
        
        if (min < nums[rIndex]) {
            l = rIndex
        } else {
            min = nums[rIndex]
        }
        rIndex--
    })
    return r - l + 1
};

// const res = findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])
const res = findUnsortedSubarray([1,2,4,5,3])
console.log(res)