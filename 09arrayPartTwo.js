function isEven (element) {
    if (element % 2 === 0) {
        return true;
    }
    return false
}

console.log(isEven(10));

// function isOdd(element) {
//     return element % 2 !== 0
// }
// console.log(isOdd(10)); 

// arrow Functions (using arrow function is optional)

var isOdd = (element) => {
    return element % 2 !== 0 
//arrow functions are required to have "return" keyword when {} are used
// instead of {}, () can be used to avoid using "return" keyword.
}

console.log(isOdd(10));

var result = [2,4,6,8,10].every(isEven);

console.log(result);

//arrow function call-backs

var newResult = [2,4,5,6,8,10].every((e) => {
    return e % 2 === 0;
})
console.log(newResult);

var secondResult = [1,3,5,7,9,11].every((e) => (e % 2 !== 0)) 
console.log("secondResult " + secondResult);
