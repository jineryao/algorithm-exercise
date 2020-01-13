if (nums.length == 1 || nums.length == 0) return 0
var left = 0
var right = nums.length - 1
var count = 0
var arr = nums.concat()
arr.sort((a, b) => a - b)
while (left < right && count < nums.length - 1) {
    count++
    if (arr[left] == nums[left]) {
        left++
    }
    if (arr[right] == nums[right]) {
        right--
    }
}
return left == right ? 0 : (right - left + 1)