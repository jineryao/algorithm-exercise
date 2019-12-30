/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let index = 0;
    let i = 0;
    let len = nums.length
    let arr = []
    for(i=0;i<len;i++){
        index = Math.abs(nums[i])-1
        if(nums[index]>0){
            nums[index] *= -1
        } 
    }
    for(i=0;i<len;i++){
        if(nums[i]>0){
            arr.push(i+1)
        }
    }
    return arr
};