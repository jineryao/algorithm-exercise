// 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

// 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

// 你可以假设 nums1 和 nums2 不会同时为空。

// 示例 1:

// nums1 = [1, 3]
// nums2 = [2]

// 则中位数是 2.0
// 示例 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// 则中位数是 (2 + 3)/2 = 2.5

var findMedianSortedArrays = function(nums1, nums2) {
    // 合并数组并排序
    let newArr = [...nums1, ...nums2].sort((a, b) => {return a-b})
    // 取整
    let m = parseInt((newArr.length) / 2)
    let len = newArr.length
    // 长度为奇数返回中间数， 偶数返回两数之和/2
    return len % 2 === 0 ? newArr[m] : ((newArr[m] + newArr[m - 1]) / 2)
};