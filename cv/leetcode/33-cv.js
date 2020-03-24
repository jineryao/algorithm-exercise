/**
 * 33. 搜索旋转排序数组
 * 
    假设按照升序排序的数组在预先未知的某个点上进行了旋转。

    ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

    搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

    你可以假设数组中不存在重复的元素。

    你的算法时间复杂度必须是 O(log n) 级别。
 * @link https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    let mid = 0
    while (left <= right) {
        mid = parseInt((left + right) / 2)
        console.log(mid, left, right)
        if (nums[mid] == target) {
            return mid
        }
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target <= nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            console.log("b")
            if (nums[mid] <= target && target <= nums[right]) {
                left = mid + 1
                console.log(left)
            } else {
                right = mid - 1
            }
        }
    }

    return -1
};

// search([4,5,6,7,0,1,2], 0)
console.log(search([1], 1))