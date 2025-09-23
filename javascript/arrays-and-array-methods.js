// Given an array of numbers, implement functions using appropriate array methods:

//   Find all even numbers (filter)
//   Double all values (map)
//   Sum all values (reduce)
//   Find the first number greater than 10 (find)
//   Check if all numbers are positive (every/some)




let numbers = [1, 2, 3, 4, 5, 16, 37, 38, 49, 95, 88, 13, 23, 34, 81];


//1. Filter even Numbers
let even_numbers = numbers.filter(n => n % 2 === 0);
console.log(even_numbers)


//2. Double all values (map)
let doubled_numbers = numbers.map(x => x * 2);
console.log(doubled_numbers)


//3. Sum all values (reduce)
let sum_of_numbers = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum_of_numbers)


//4. Find the first number greater than 10 (find)
let first_number_greater_that_ten = numbers.find(n => n > 10)
console.log(first_number_greater_that_ten)


//5. Check if all numbers are positive (every/some)
let check_if_all_numbers_positive= numbers.every( n => n > 0)
console.log(check_if_all_numbers_positive)