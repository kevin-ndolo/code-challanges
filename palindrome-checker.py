# Palindrome Checker
#   Create a function that determines if a given string is a palindrome (reads the same forwards
#   and backwards). Handle edge cases like spaces, punctuation, and case sensitivity.

foo = "m@a?da*m"


def palindrome_checker(bar):
  bar = bar.lower()
  cleaned = ""
  for char in bar:
    if char.isalnum():
      cleaned += char 
  return cleaned == cleaned[::-1]

print(palindrome_checker(foo))