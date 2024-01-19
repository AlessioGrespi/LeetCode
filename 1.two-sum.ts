/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    for (let x in nums) {
        for (let y in nums) {
            if (x === y){
                continue;
            };

            if (target === (nums[parseInt(x)] + nums[parseInt(y)])){
                let number = [];
                number[0] = parseInt(x);
                number[1] = parseInt(y);
                return number;
            };
        };
    };
};
// @lc code=end

