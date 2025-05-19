//array is a collection of data of same or different data types.

var countries = ["India", "Spain", "Japan", "Russia", "France"]

var states = new Array("Karnataka", "Delhi", "Maharastra", "Assam")

console.log(states[2]); // elements in the array are known as index
states[0] = "Himachal Pradesh";
console.log(states);

var user = ["Ram", "ramlikestocode@gmail.com", 3, 34, true];

// user.pop(); // removes the last element
// user.unshift("New Value") // adds one or more elements at beginning of the array
// user.shift("New Value") //removes the first element
// console.log(user);

console.log(user.indexOf(34));
