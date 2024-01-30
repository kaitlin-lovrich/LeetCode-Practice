function removeDuplicates(nums) {
    let k = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k]) {
	      k++;
	      nums[k] = nums[i];
	    }
    }
    // console.log(nums)
    return k+1;
};

removeDuplicates([1,1,2]);
console.log(removeDuplicates([1,1,2]));