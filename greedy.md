# Greedy

> Pick the locally optimal solution at each step, and that will lead to the globally optimal solution.

## Examples
1. Maximum subarray
> Problem: Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
Solution:
```
var maxSubArray = function(nums) {
    let n = nums.length,
        currentSum = nums[0],
        maxSum = nums[0];
    for (let i = 1; i < n; i++) {
        currentSum = Math.max(currentSum + nums[i], nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
};
```
At each step, compare the *current value* against the *greatest contiguous sum up until that point*. At any point, if the current value is greater than that sum, it will become the new `currentSum`. (In other words, we lop off all preceding numbers in the array and start fresh). The reason this works is that you never have the luxury of dropping off any *connecting* values. Any *greatest contiguous sum up until this point* must include that previous value (in addition, of course, to any preceding values).