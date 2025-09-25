# List Manipulation
#   Given a list of integers, write functions to:
#     Find the second largest number
#     Remove duplicates while preserving order
#     Rotate the list by k positions



my_nums = [2, 17, 98, 3, 573, 24, 953, 4, 77, 81, 61, 5, 592, 1, 2, 4, 99, 3, 24, 77]
print(my_nums)



#     Find the second largest number
def second_largest(nums):
  unique = list(set(nums))
  if len(unique) < 2:
    return None
  unique.sort(reverse=True)
  return unique[1]


print(second_largest(my_nums))



#     Remove duplicates while preserving order
def remove_duplicates(nums):
  seen = set()
  result = []
  for num in nums:
    if num not in seen:
      seen.add(num)
      result.append(num)
  
  return result


print(remove_duplicates(my_nums))





# Rotate the list by k positions
from collections import deque

"""

**Deque (pronounced "deck") explanation:**

Deque stands for "double-ended queue." It's a data structure that allows you to efficiently add or remove items from both the front and back of the collection.

**Key differences from regular lists:**
- **Regular list:** Fast at the end, slow at the beginning
- **Deque:** Fast at both ends

**Common operations:**
- `append()` - add to right end
- `appendleft()` - add to left end  
- `pop()` - remove from right end
- `popleft()` - remove from left end
- `rotate(k)` - move k items from one end to the other

**Why use it:**
When you need to frequently add/remove items from both ends of your collection, or when you need built-in rotation functionality. Regular lists have to shift all elements when you modify the front, which is slow for large lists.

**Perfect for:** queues, rotating buffers, sliding windows, and operations like the rotation you're doing.

"""



def rotate_list_with_deque(nums, k):
  d = deque(nums)
  # print(d)
  d.rotate(k)
  # print(d)
  # print(list(d))
  return list(d)

print(rotate_list_with_deque(my_nums, 30))