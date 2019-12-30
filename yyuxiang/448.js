/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var res = []
    for(var i = 1;i<nums.length;i++){
        if(nums.indexOf(i) === -1){
            res.push(i)
        }
    }
    return res
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))