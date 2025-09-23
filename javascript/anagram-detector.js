// Anagram Detector
//   Write a function to determine if two strings are anagrams of each other. Implement multiple
//   solutions (sorting vs character counting) and discuss trade-offs.
// Anagram -a word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.



// Sorting
function isAnagramSort(str1, str2){
  clean1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '')
  clean2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '')
  
  return clean1.split("").sort().join("") === clean2.split("").sort().join("")
}

console.log(isAnagramSort("Listen", "Silent"))



// Character Counting (Frequency Map)
function isAnagramCount(str1, str2) {
  const clean1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
  const clean2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (clean1.length !== clean2.length) return false;

  const count = {};

  for (let char of clean1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of clean2) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}


console.log(isAnagramCount('Secure', 'Rescue'))