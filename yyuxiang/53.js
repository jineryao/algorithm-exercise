function maxSubArray(nums) {
    var max = -Infinity;
    for (var i = 0; i < nums.length; i++) {
        for (var j = i+1; j < nums.length; j++) {
            var sum = 0;
            for (var k = i; k <= j; k++) {
                sum += nums[k]
            }
            if (sum > max) {
                max = sum
            }
        }
    }
    return max
}