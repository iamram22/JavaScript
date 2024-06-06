/* In JavaScript, the bind() method creates a new function that, when called,
has its this keyword set to a specific value, and with a specified sequence of arguments
preceding any provided when the new function is called. */

function addition(a, b) {
    console.log(a + b);
};

const theSum = addition.bind(null, 5); //5 is binded to "b"

theSum(15)