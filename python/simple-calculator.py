# Simple Calculator
#   Implement a calculator that can perform basic operations (+, -, *, /) on two numbers. Include
#   error handling for division by zero and invalid inputs.




def simple_calculator():
  print("Simple Calculator")
  print("Supported operations: +  -  *  /")

  # Get and validate first number
  num_input1 = input("Enter first number: ")
  try:
    num1 = float(num_input1)
  except ValueError:
    print("Error: First input is not a valid number.")
    return
  

  # Get operator
  operator = input("Enter an operator (+, -, *, /): ")


  # Get and validate second number
  num_input2 = input("Enter second number: ")
  try:
    num2 = float(num_input2)
  except ValueError:
    print("Error: Second input is not a valid number.")
    return
  
  # Perform calculation
  result = None

  if operator == "+":
    result =  num1 + num2
  
  elif operator == "-":
    result = num1 - num2
  
  elif operator == "*":
    result = num1 * num2

  elif operator == "/":
    if num2 == 0:
      print("Error: Division by zero is not allowed.")
      return
    result = num1 / num2
  
  else: 
    print("Error: Invalid Operator")
    return
  

  # Show result
  print(f"Result: {result}")
  


simple_calculator()