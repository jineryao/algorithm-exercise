# -*- coding:utf-8 -*-

"""
题目url: https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
描述：
    给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
    请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
    你可以假设 nums1 和 nums2 不会同时为空
"""
class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        n = len(nums1)
        m = len(nums2)
        k_left = (n + m + 1) // 2;
        k_right = (n + m + 2) // 2;
        return (self.getKth(nums1, 0, n, nums2, 0, m, k_left) + self.getKth(nums1, 0, n, nums2, 0, m, k_right)) / 2
    
    def getKth(self, nums1, start1, end1, nums2, start2, end2, k):
        len1 = end1 - start1 
        len2 = end2 - start2
        if len1 > len2:
            return self.getKth(nums2, start2, end2, nums1, start1, end1, k)
        if len1 == 0:
            return nums2[start2 + k - 1]
        if k == 1:
            return min(nums1[start1], nums2[start2])

        i = start1 + min(len1, k // 2) - 1
        j = start2 + min(len2, k // 2) - 1
        if nums1[i] < nums2[j]:
            return self.getKth(nums1, i + 1, end1, nums2, start2, end2, k - (i - start1 + 1))
        else:
            return self.getKth(nums1, start1, end1, nums2, j + 1, end2, k - (j - start2 + 1)) 


# res = Solution().findMedianSortedArrays([1, 3], [2,4])
# res = Solution().findMedianSortedArrays([2, 4], [1,3])
res = Solution().findMedianSortedArrays([1, 2], [3,4])
# res = Solution().findMedianSortedArrays([], [1])
# res = Solution().findMedianSortedArrays([], [1,2])
# res = Solution().findMedianSortedArrays([3], [-2,-1])
# res = Solution().findMedianSortedArrays([1,3], [2])
print(res)
