// Shopping Cart Calculator
//   Build a shopping cart system using array methods:
//     Calculate total price with tax
//     Apply discount codes
//     Group items by category
//     Find most/least expensive items
//     Handle quantity updates



const cart = [
  { name: "Laptop", price: 1200, category: "Electronics" },
  { name: "Headphones", price: 200, category: "Electronics" },
  { name: "Coffee Mug", price: 15, category: "Kitchen" },
  { name: "Notebook", price: 10, category: "Stationery" },
  { name: "Pen", price: 5, category: "Stationery" },
  { name: "Blender", price: 85, category: "Kitchen" },
];



// Calculate total price with tax
function calculateTotal(cart, taxRate = 0.16){
  const subtotal = cart.reduce((sum, item ) => sum + item.price, 0);
  // console.log(subtotal)
  return subtotal + subtotal * taxRate;

}

console.log(calculateTotal(cart))



//     Apply discount codes
function applyDiscount (cart, code){
    const discounts = {

    SAVE10: 0.10,
    SAVE20: 0.20,
    KENYA5: 0.05,
  };

  const rate = discounts[code] || 0;

  return cart.map(item => ({
    ...item,
    price: item.price * (1 - rate)
  }))
  
}

const discountedCart = applyDiscount(cart, "SAVE10");
console.log(discountedCart)



//     Group items by category
function groupByCategory(cart){
  const groups = {};
  
  for (const item of cart){
    const category = item.category;

    if (!groups[category]) {
      groups[category] = [];
    }

    groups[category].push(item)


  }

  return groups;

}

console.log(groupByCategory(cart));




//     Find most/least expensive items

function findMostExpensive(cart) {
  let mostExpensive = cart[0];
  
  for (const item of cart) {
    if (item.price > mostExpensive.price) {
      mostExpensive = item;
    }
  }
  
  return mostExpensive;
}

function findLeastExpensive(cart) {
  let leastExpensive = cart[0];
  
  for (const item of cart) {
    if (item.price < leastExpensive.price) {
      leastExpensive = item;
    }
  }
  
  return leastExpensive;
}


console.log("Most expensive:", findMostExpensive(cart));
console.log("Least expensive:", findLeastExpensive(cart));