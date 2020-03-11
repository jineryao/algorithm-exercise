/**
 * 283. 移动零
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * @link https://leetcode-cn.com/problems/move-zeroes/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var moveZeroes = function (nums) {
//     // 循环，维护出现 0 的次数, 有几个零，就向前移动几位
//     let zeroCount = 0
//     nums.forEach((val, i) => {
//         if (val == 0) {
//             zeroCount++
//         } else if (zeroCount != 0) {
//             [nums[i], nums[i - zeroCount]] = [nums[i - zeroCount], nums[i]]
//         }
//     })
//     return nums
// };

var moveZeroes = function (nums) {
    let index = 0
    nums.forEach((val) => {
        if (val != 0) {
            nums[index++] = val
        }
    })
    while (index < nums.length) {
        nums[index++] = 0
    }
    return nums
};

let res = moveZeroes([0, 1, 0, 3, 12])
//[1,3,12,0,0]
console.log(res)
