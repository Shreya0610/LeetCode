function remove(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1);
      i--;
    }
  }
  k = nums.length;
  console.log(k);
}
remove([1, 1, 3, 4, 5, 6, 1], 1);
