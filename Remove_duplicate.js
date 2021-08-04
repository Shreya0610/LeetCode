let k = 0;
function removeDuplicates(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums.splice(j, 1);
        j--;
      }
    }
  }
  k=nums.length;
  console.log(k);
}

removeDuplicates([1, 1, 2]);
