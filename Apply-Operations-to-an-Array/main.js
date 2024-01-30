function applyOperations(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i+1]) {
            nums[i] *= 2;
            nums[i+1] = 0;
        }
    }
    
    let k = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[i]
            nums[i] = nums[k];
            nums[k] = temp;
            k++
        }
    }
    return nums;
}

applyOperations([1,2,2,1,1,0]); // Output: [1,4,2,0,0,0]
console.log(applyOperations([1,2,2,1,1,0]))

applyOperations([0,1]); // Output: [1,0]
console.log(applyOperations([0,1]))