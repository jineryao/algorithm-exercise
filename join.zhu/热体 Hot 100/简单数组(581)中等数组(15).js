/**
 * 简单数组581
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let len = nums.length
    let maxValue = nums[0]
    let minValue = nums[len-1]
    let rightIndex = 0
    let leftIndex = len-1
    for(let n=0;n<len;n++){
        if(maxValue>nums[n]){
            rightIndex = n
        }else{
            maxValue = nums[n]
        }

        if(minValue<nums[len-1-n]){
            leftIndex = len-1-n
        }else{
            minValue = nums[len-1-n]
        }
    }
    return rightIndex - leftIndex<=0 ? 0 : rightIndex-leftIndex + 1
};

/**
 * 中等数组15
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let len = nums.length
    if(len<3){
        return []
    }
    let newNums = nums.sort((prov, next)=> prov-next )
    let left = 0
    let right = 0
    let res = []
    let sum = 0
    for(let i=0;i<len;i++){
        if(nums[i]>0){
            return res
        }
        if(i>0&&nums[i]==nums[i-1]){
            continue
        }
        left = i + 1
        right = len - 1
        
        while(left<right){
            sum = nums[i]+nums[left]+nums[right]
            if(sum==0){
                res.push([nums[i],nums[left],nums[right]])
                while(left<right&&nums[left]==nums[left+1]){
                    left++
                }
                while(left<right&&nums[right]==nums[right-1]){
                    right--
                }
                left++
                right--
            }else if(sum<0){
                left++
            }else if(sum>0){
                right--
            }
        }
    }

    return res
};