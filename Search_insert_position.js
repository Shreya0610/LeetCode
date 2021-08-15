var searchInsert = function (nums, target) {
  var k = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      k = i;
    }
  }
  if (k === -1) {
    for (let j = 0; j < nums.length; j++) {
      if (target < nums[j]) {
        k = j;
        j = nums.length;
      }
    }
    if (target >= nums[nums.length - 1]) {
      k = nums.length;
    }
  }

  return k;
};
