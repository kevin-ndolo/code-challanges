# Word Counter
#   Build a program that takes a text file and returns the frequency count of each word. Output
#   should be sorted by frequency (most common first).


import os



def word_counter(filename):
  word_counts = {}

  # print(__file__)
  # print(os.path.dirname(__file__))
  # print(os.path.join(os.path.dirname(__file__), filename))

  filepath = os.path.join(os.path.dirname(__file__), filename)

  # Read file
  with open(filepath, "r") as file:
      text = file.read()
    # print(text)

  # Normalize file
  text = text.lower()

  # remove punctuation
  cleaned_text =""
  for char in text:
    if char.isalnum() or char.isspace():
       cleaned_text += char
  # print(cleaned_text)

  # Split into words
  words = cleaned_text.split()
  print(words)

# Count each word
  for word in words:
     if word in word_counts:
        # current_count = word_counts[word]  # get the current count of the word
        # new_count = current_count + 1      # add 1 to it
        # word_counts[word] = new_count      # update the dictionary with the new count

        word_counts[word] += 1

     else:
        word_counts[word] = 1


  # # Define a sort key function
  # def get_count(item):
  #   return item[1]
  

  # Sort by frequency (highest first)
  # sorted_counts = sorted(word_counts.items(), key=get_count, reverse=True)
  sorted_counts = sorted(word_counts.items(), key=lambda x: x[1], reverse=True)


  # Print results
  for word, count in sorted_counts:
     print(f"{word}: {count}")

word_counter("word-counter.txt")