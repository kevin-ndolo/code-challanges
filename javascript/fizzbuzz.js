// FizzBuzz with a Twist

//   Write a program that prints numbers 1 to 100, but:

//     Print "Fizz" for multiples of 3
//     Print "Buzz" for multiples of 5
//     Print "FizzBuzz" for multiples of both
//     Use both a traditional loop and a functional approach



// //traditional loop
// for (let i = 1; i < 101; i++) {
 
//   if (i % 3 === 0 && i % 5 === 0 ){
//     console.log("FizzBuzz")
//   }

//   else if (i % 3 === 0) {
//      console.log("Fizz")
//   }

//   else if (i % 5 === 0) {
//      console.log("Buzz")
//   }

//   else{
//      console.log(i)
//   }
   
    

// }



// function fizzbuzz
Array.from({ length: 100 }, (_, i) => i + 1)
.map(n => {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n;
})
.forEach(result => console.log(result));

