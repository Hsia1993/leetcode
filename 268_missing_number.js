// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.


// Input: [3,0,1]
// Output: 2

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8


//思路: 算出1 ~ nums.lenght的和,减去数据相加的和,既可以得出结果
const missingNumber = (nums) => {
    const sum = nums.reduce((a, b) => a + b);
    return (nums.length + 1) * nums.length / 2 - sum;
}
