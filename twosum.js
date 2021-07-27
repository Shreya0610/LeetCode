var twoSum = function (nums, target) {
  if (nums.length >= 2) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = 1; j < nums.length; j++) {
        if (j != i) {
          if (nums[i] + nums[j] === target) {
            return [i, j];
          }
        }
      }
    }
  }
};

