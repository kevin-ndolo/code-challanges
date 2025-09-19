# Word Counter
#   Build a program that takes a text file and returns the frequency count of each word. Output
#   should be sorted by frequency (most common first).


import os



def word_counter(filename):
  word_counts = {}

  print(__file__)
  print(os.path.dirname(__file__))
  print(os.path.join(os.path.dirname(__file__), filename))

  filepath = os.path.join(os.path.dirname(__file__), filename)

  with open(filepath, "r") as file:
    text = file.read()


    # print(text)






word_counter("word-counter.txt")