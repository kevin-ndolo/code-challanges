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




# class Calculator:
#     def __init__(self):
#         self.last_result = None

#     def add(self, a, b):
#         self.last_result = a + b
#         return self.last_result

#     def subtract(self, a, b):
#         self.last_result = a - b
#         return self.last_result

#     def multiply(self, a, b):
#         self.last_result = a * b
#         return self.last_result

#     def divide(self, a, b):
#         if b == 0:
#             raise ValueError("Division by zero is not allowed.")
#         self.last_result = a / b
#         return self.last_result

#     def calculate(self, a, operator, b):
#         if operator == '+':
#             return self.add(a, b)
#         elif operator == '-':
#             return self.subtract(a, b)
#         elif operator == '*':
#             return self.multiply(a, b)
#         elif operator == '/':
#             return self.divide(a, b)
#         else:
#             raise ValueError("Invalid operator. Please use +, -, *, or /.")

# def run_calculator():
#     calc = Calculator()

#     print("Simple Class Based Calculator")
#     print("Supported operations: +  -  *  /")

#     # Step 1: Get and validate first number
#     num1_input = input("Enter the first number: ")
#     try:
#         num1 = float(num1_input)
#     except ValueError:
#         print("Error: First input is not a valid number.")
#         return

#     # Step 2: Get operator
#     operator = input("Enter an operator (+, -, *, /): ")

#     # Step 3: Get and validate second number
#     num2_input = input("Enter the second number: ")
#     try:
#         num2 = float(num2_input)
#     except ValueError:
#         print("Error: Second input is not a valid number.")
#         return

#     # Step 4: Perform calculation
#     try:
#         result = calc.calculate(num1, operator, num2)
#         print(f"Result: {result}")
#     except ValueError as e:
#         print("Error:", e)

# run_calculator()
