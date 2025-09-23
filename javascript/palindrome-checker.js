// Palindrome Checker (Multiple Approaches)

//   Create a function that checks if a string is a palindrome:

//     Handle case insensitivity and non-alphanumeric characters
//     Implement using both iterative and recursive approaches
//     Bonus: Use array methods like split(), reverse(), join()



// iterative
function isPalindromeIterative(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = clean.length - 1;

  while (left < right) {
    if (clean[left] !== clean[right]) return false;
    left++;
    right--;
  }

  return true;
}
console.log(isPalindromeIterative("madam"))



// Recursive
function isPalindromeRecursive(str){
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  function check(left, right){
    if(left >= right) return true;
    if (clean[left] !== clean[right]) return false;
    return check(left + 1, right - 1);

  }

  return check(0, clean.length -1)

}
console.log(isPalindromeRecursive("madam"))



///Bonus
function isPalindromeArray(str){
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}
console.log(isPalindromeArray('No lemon, no melon'))