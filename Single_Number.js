function singleNumber(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums.splice(j, 1);
        nums.splice(i, 1);
        j--;
        i--;
      }
    }
  }
  console.log(nums);
}
singleNumber([4, 1, 2, 1, 2]);
singleNumber([2, 2, 1]);
