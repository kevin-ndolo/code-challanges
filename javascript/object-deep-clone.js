// Object Deep Clone
//   Implement a deep cloning function that:
//     Handles nested objects and arrays
//     Preserves data types (dates, functions, etc.)
//     Avoids circular reference issues
//     Compare with shallow cloning approaches



// Simple Deep Clone Function
// This clones objects and arrays, including nested ones

function deepClone(value) {
  // Step 1: Handle simple values that don't need cloning
  // null, undefined, numbers, strings, booleans can just be returned
  if (value === null || typeof value !== 'object') {
    return value;
  }
  
  // Step 2: Handle Arrays
  if (Array.isArray(value)) {
    const newArray = [];
    for (let i = 0; i < value.length; i++) {
      newArray[i] = deepClone(value[i]); // Clone each item recursively
    }
    return newArray;
  }
  
  // Step 3: Handle Dates (special object type)
  if (value instanceof Date) {
    return new Date(value.getTime());
  }
  
  // Step 4: Handle regular Objects
  const newObject = {};
  for (let key in value) {
    if (value.hasOwnProperty(key)) {
      newObject[key] = deepClone(value[key]); // Clone each property recursively
    }
  }
  return newObject;
}

// ============================================
// SHALLOW CLONE for comparison
// ============================================

function shallowClone(value) {
  // Only copies the first level
  if (Array.isArray(value)) {
    return [...value]; // spread operator makes a copy
  }
  if (typeof value === 'object' && value !== null) {
    return { ...value }; // spread operator makes a copy
  }
  return value;
}

// ============================================
// TESTS - Let's see it in action!
// ============================================

console.log("=== TEST 1: Simple Object ===");
const original1 = { name: "Alice", age: 25 };
const cloned1 = deepClone(original1);
cloned1.name = "Bob";
console.log("Original:", original1); // Still "Alice"
console.log("Cloned:", cloned1);     // Changed to "Bob"

console.log("\n=== TEST 2: Nested Object ===");
const original2 = {
  user: {
    name: "Alice",
    address: {
      city: "NYC"
    }
  }
};
const cloned2 = deepClone(original2);
cloned2.user.address.city = "LA";
console.log("Original city:", original2.user.address.city); // Still "NYC"
console.log("Cloned city:", cloned2.user.address.city);     // Changed to "LA"

console.log("\n=== TEST 3: Array with Objects ===");
const original3 = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" }
];
const cloned3 = deepClone(original3);
cloned3[0].name = "Modified";
console.log("Original:", original3[0].name); // Still "Item 1"
console.log("Cloned:", cloned3[0].name);     // Changed to "Modified"

console.log("\n=== TEST 4: Date Object ===");
const original4 = { createdAt: new Date("2024-01-01") };
const cloned4 = deepClone(original4);
cloned4.createdAt.setFullYear(2025);
console.log("Original year:", original4.createdAt.getFullYear()); // Still 2024
console.log("Cloned year:", cloned4.createdAt.getFullYear());     // Changed to 2025

console.log("\n=== SHALLOW vs DEEP CLONE ===");
const nested = { 
  level1: { 
    level2: "value" 
  } 
};
const shallow = shallowClone(nested);
const deep = deepClone(nested);

shallow.level1.level2 = "CHANGED";
console.log("Original after shallow clone:", nested.level1.level2); // "CHANGED" - BAD!
console.log("Shallow clone:", shallow.level1.level2);                // "CHANGED"

deep.level1.level2 = "CHANGED AGAIN";
console.log("Original after deep clone:", nested.level1.level2);    // Still "CHANGED"
console.log("Deep clone:", deep.level1.level2);                      // "CHANGED AGAIN"