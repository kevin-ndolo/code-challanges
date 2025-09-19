# FizzBuzz Implementation
#   Write a program that prints numbers 1 to 100, but:
#   Print "Fizz" for multiples of 3
#   Print "Buzz" for multiples of 5
#   Print "FizzBuzz" for multiples of both 3 and 5




def fizzbuzz(n):
  for i in range(1, n+1):
    if i % 3 == 0 and i % 5 == 0:
      print("fizzbuzz")
    elif i % 3 == 0:
      print("fizz")
    elif i % 5 == 0:
      print("buzz")
    else:
      print(i)



fizzbuzz(100)
  