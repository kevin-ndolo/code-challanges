// Data Transformation Pipeline
//   Transform an array of user objects:
//   [{name: "John Doe", age: 25, city: "NYC"}, ...]
//     Extract just the names
//     Filter users by age range
//     Group by city
//     Create summary statistics


const users = [
  { name: "John Doe", age: 25, city: "NYC" },
  { name: "Jane Smith", age: 32, city: "London" },
  { name: "Ali Mwangi", age: 19, city: "Nairobi" },
  { name: "Maria Lopez", age: 45, city: "NYC" },
  { name: "Tom Lee", age: 28, city: "London" },
];


// Extract just the names
function extractNames(users){
  let names = []; 
  for (const user of users){
    names.push(user.name);
  }
  return names

}
console.log(extractNames(users))


const extractNames2 = users.map(user => user.name);
console.log(extractNames2);




//     Filter users by age range
function filterByAge(users, minAge, maxAge){
  return users.filter(user => {
    return user.age >= minAge && user.age <= maxAge
  })

}

console.log(filterByAge(users, 20, 40))



//     Group by city

function groupByCity(users){
  
  const grouped = {}
  for (const user of users) {
    const city = user.city;
    
    if (!grouped[city]){
      grouped[city] = [];
    }

    grouped[city].push(user)

  }
  return grouped
}

console.log(groupByCity(users))




// Create summary statistics

function getSummaryStats(users){
  const totalUsers = users.length;
  
  let totalAge = 0;
  let minAge = Infinity;
  let maxAge = -Infinity;
  let youngest =  null;
  let oldest = null;

  const cityCounts = {}


  for (const user of users){
    //ages

    totalAge += user.age;

    if (user.age < minAge){
      minAge = user.age;
      youngest = user.name
    }


    if (user.age > maxAge){
      maxAge = user.age;
      oldest = user.name
    }

    //city counts
    if (!cityCounts[user.city]){
      cityCounts[user.city] = 0
    }
    cityCounts[user.city]++;

  }

  return{
    totalUsers: totalUsers,
    averageAge: totalAge/totalUsers,
    youngest: {name:youngest, age: minAge},
    oldest: {name:oldest, age: maxAge},
    usersPerCity:cityCounts
  }


}


console.log(getSummaryStats(users))