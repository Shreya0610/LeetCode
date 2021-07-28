var moveZeroes = function (nums) {
  for (var i = 0; i < nums.length; i++) {
    k = i;
    if (nums[i] === 0) {
      for (var j = i + 1; j < nums.length; j++) {
        if (nums[j] != 0) {
          var x;
          x = nums[j];
          nums[j] = nums[k];
          nums[k] = x;
          k++;
        }
      }
    }
  }
  return nums;
};
