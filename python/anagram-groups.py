# Anagram Groups
#   Given a list of strings, group all anagrams together. For example: ["eat", "tea", "tan", "ate",
#   "nat", "bat"] should return [["eat","tea","ate"],["tan","nat"],["bat"]]

base_words =['diner', 'pylon', 'mile', 'flow', 'loop', 'terminal', 'bear', 'wolf', 'trance', 'tide', 'arcset', 'program', 'care', 'python', 'scream', 'opts', 'gains', 'terminal', 'pears', 'reaps', 'tires', 'post', 'signs', 'draw', 'race', 'sora', 'computer', 'ancetr', 'outer', 'edit', 'reins', 'sprint', 'route', 'cars', 'study', 'draw', 'algorithm', 'ward', 'resin', 'flow', 'tops', 'satin', 'team', 'sprint', 'iceman', 'cinema', 'item', 'mite', 'stain', 'meat', 'stop', 'sally', 'pots', 'tools', 'study', 'posts', 'earth', 'heart', 'reins', 'live', 'vile', 'direc', 'cried', 'nired', 'diner', 'loop', 'iceman', 'reins', 'pylon', 'string', 'vile', 'wolf', 'program', 'tools', 'stain', 'console', 'string', 'wolf', 'console', 'laptop', 'flow', 'arcset', 'mile', 'lime', 'ward', 'terminal', 'sora', 'reins', 'gemini', 'coding', 'trance', 'outer', 'reaps', 'terminal', 'route', 'tools', 'program']


def group_anagrams(words):
  groups = {}
  for word in words:
    # print(word)
    key = ''.join(sorted(word))
    if key not in groups:
      groups[key] = []
    groups[key].append(word)
  # print(groups)
  print(list(groups.values()))





group_anagrams(base_words)