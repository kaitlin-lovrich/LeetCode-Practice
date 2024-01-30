function removeElement(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++
        }
    }
    console.log('nums:', nums);
    return k;
};


removeElement([3,2,2,3], 3);
console.log('removeElement:', removeElement([3,2,2,3], 3));

removeElement([0,1,2,2,3,0,4,2], 2);
console.log('removeElement:', removeElement([0,1,2,2,3,0,4,2], 2));