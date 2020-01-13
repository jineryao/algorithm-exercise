/**
 * 简单53
 */
var maxSubArray = function(nums) {
    let sum = 0
    let end = nums[0]
    for(let i=0;i<nums.length;i++){
        sum = sum>0 ? sum+nums[i] : nums[i]
        end = Math.max(sum, end)
    }
    return end
};

/**
 * 中等62
 */
var uniquePaths = function(m, n) {
    let row,col;
    let checkerboard = []
    for(row=0; row<m; row++){
        checkerboard[row] = []
        checkerboard[row][0] = 1
    }
    for(col=0; col<n; col++){
        checkerboard[0][col] = 1
    }
    // 不存在[-1]
    for(row=1; row<m; row++){
        for(col=1; col<n; col++){
            checkerboard[row][col] = checkerboard[row][col-1] + checkerboard[row-1][col]
        }
    }
    return checkerboard[m-1][n-1]
};