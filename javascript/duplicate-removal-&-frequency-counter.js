// Duplicate Removal & Frequency Counter
//   Given an array with duplicates:
//     Remove duplicates (multiple approaches)
//     Count frequency of each element
//     Find the most/least common elements
//     Handle both primitive values and objects



const items = ["apple", "banana", "apple", "orange", "banana", "apple"];



//     Remove duplicates (multiple approaches)
function removeDuplicatesUsingSet(items){
  new_items = [...new Set(items)]
  return new_items
}
console.log(removeDuplicatesUsingSet(items))


function removeDuplicatesUsingFilter(items){
  return items.filter((item, index) => items.indexOf(item) === index)
}
console.log(removeDuplicatesUsingFilter(items))



//     Count frequency of each element
function countFrequency(fruits){
  item_count = {};
  for (const fruit of fruits){
    // console.log(fruit)
    if (!item_count[fruit]){
      item_count[fruit] = 0;
    }
    item_count[fruit]++;
  }
  // console.log(item_count)
  return item_count;
}

console.log(countFrequency(items))


//     Find the most/least common elements
function leastAndMostCommonItem(frequencyMap){
  let leastCount = Infinity;
  let mostCount = -Infinity;
  let leastElement = "";
  let mostElement = ""

  const fruit_items = frequencyMap
  // console.log(fruit_items)
  // console.log(typeof(fruit_items))

  for (const [fruit, count] of Object.entries(fruit_items)){
    // console.log(fruit);
    // console.log(count);

    if (count < leastCount){
      leastCount = count;
      leastElement = fruit;
    }

    if (count > mostCount){
      mostCount = count;
      mostElement = fruit;

    }

  }

  // console.log(mostCount, mostElement, leastCount, leastElement) 
  return {
    most: { item: mostElement, count: mostCount },
    least: { item: leastElement, count: leastCount }
  };

}

console.log(leastAndMostCommonItem(countFrequency(items)))




// Handle both primitive values and objects

const items2 = [
  { name: "apple" },
  { name: "banana" },
  { name: "apple" },
  { name: "orange" },
  { name: "banana" },
  { name: "apple" }
];

// Remove Duplicates
function removeDuplicatesByKey(items2){
  const seen = new Set();
  const new_items = [];

  for (const item of items2){
    if (!seen.has(item.name)){
      seen.add(item.name);
      new_items.push(item);
    }
  }

  return new_items;
}

console.log(removeDuplicatesByKey(items2));


// Count Frequency
function countFrequencyByKey(items2){
  const item_count = {};

  for (const item of items2){
    const fruit = item.name;
    if (!item_count[fruit]){
      item_count[fruit] = 0;
    }
    item_count[fruit]++;
  }

  return item_count;
}

console.log(countFrequencyByKey(items2));


/*
leastAndMostCommonItem() function works exactly the same for both primitive arrays and object arrays, as long as frequency map is passed in the same format.
*/