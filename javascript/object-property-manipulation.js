// Object Property Manipulation
//   Create utilities to:
//     Flatten nested objects ({a: {b: {c: 1}}} → {"a.b.c": 1})
//     Unflatten back to nested structure
//     Pick specific properties from objects
//     Merge objects with conflict resolution


const inventory = {
  apple: {
    price: 1.2,
    stock: {
      warehouse: 50,
      store: 20
    }
  },
  banana: {
    price: 0.8,
    stock: {
      warehouse: 100,
      store: 40
    }
  }
};



const flatInventory = {
  "apple.price": 1.2,
  "apple.stock.warehouse": 50,
  "apple.stock.store": 20,
  "banana.price": 0.8,
  "banana.stock.warehouse": 100,
  "banana.stock.store": 40
};


const fruit = {
  name: "kiwi",
  price: 2.5,
  stock: 30,
  supplier: "Tropical Farms",
  organic: true
};







//     Flatten nested objects 
function flattenObject(obj, prefix = "", result = {}) {
  for (const key in obj) {
    // console.log(key)
    const value = obj[key];
    // console.log(value)
    const newKey = prefix ? `${prefix}.${key}` : key;
    // console.log(newKey)

    if (typeof value === "object" && value !== null && !Array.isArray(value)) {
      flattenObject(value, newKey, result);
    } else {
      result[newKey] = value;
    }
  }
  // console.log(result)
  return result;
}

// flattenObject(inventory)
console.log(flattenObject(inventory))




//     Unflatten back to nested structure

function unflattenObject(flatObj) {
  const result = {};

  for (const flatKey in flatObj) {
    const parts = flatKey.split(".");
    let current = result;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (i === parts.length - 1) {
        current[part] = flatObj[flatKey];
      } else {
        if (!current[part]) {
          current[part] = {};
        }
        current = current[part];
      }
    }
  }

  return result;
}


console.log(unflattenObject(flatInventory))




//     Pick specific properties from objects
function pick(obj, keys) {
  const result = {};
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}


const keys = ["name", "price", "organic"];

console.log(pick(fruit, keys))





//     Merge objects with conflict resolution

function mergeObjects(obj1, obj2) {
  const result = { ...obj1 };

  for (const key in obj2) {
    if (key in result && typeof result[key] === "object" && typeof obj2[key] === "object") {
      result[key] = mergeObjects(result[key], obj2[key]);
    } else {
      result[key] = obj2[key];
    }
  }

  return result;
}


const localStock = {
  grape: {
    price: 3.0,
    stock: 25
  },
  mango: {
    price: 2.0,
    stock: 10
  }
};

const warehouseStock = {
  grape: {
    stock: 75
  },
  mango: {
    stock: 90,
    supplier: "Sunshine Co."
  }
};


console.log(mergeObjects(localStock, warehouseStock));