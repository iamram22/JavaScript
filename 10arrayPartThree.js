const testArray = [2,4,6,3,1,5,9,8]

// console.log(testArray.fill("h", 2));

const myNumber = [1,2,4,5,6,7,8,9,66,75,87,32,78]
const result = myNumber.filter((num) => num >= 78)
console.log(result);

//learning about Splice properties for Arrays

var users = ["Ted", "Tim", "Tom", "Sam", "Sor", "Sod"]

console.log(users.slice(1,4));

users.splice(1, 3, "Hie")
//The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

console.log(users);  

