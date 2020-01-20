var moveZeroes = function(nums) {
    if(nums == null || nums.length === 0) return
    for(var i=0;i<nums.length;i++) {
        if(nums[i] === 0) {
            nums.splice(i,1)
            nums.push(0);
        }
    }
    return nums
};