# Two Sum Problem
#   Given an array of integers and a target sum, find two numbers that add up to the target.
#   Return their indices. Optimize for efficiency.


nums = [608, 174, 482, 912, 882, 321, 673, 984, 437, 238, 723]
target = 1466


def two_sum(nums, target):
  seen= {}
  for i, num in enumerate(nums):
    complement = target - num

    if complement in seen:
      return [seen[complement], i]

    seen[num] = i

  return None











print(two_sum(nums, target))