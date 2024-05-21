// using self-executing function for understanding lexical scoping

/* Lexical-scoping : When a function is defined within another function, 
the inner function has access to the variables declared in the outer function.
This access is possible because the inner function retains a reference to the scope
in which it was defined, even if it is executed in a different scope. */

(function init() {
    var name = "I'm on line 9, and inner functions can get access";
    (function sayName() {
        console.log(name);
    })();
})();


/* Closure: A closure occurs when an inner function (a function defined within another function)
is returned from the outer function and maintains access to the variables and parameters of the outer function,
even after the outer function has finished executing.
 */

function outerFunction() {
    var outerVariable = 'I am outer';

    function innerFunction() {
        console.log(outerVariable); // Inner function accesses "outerVariable"
    };
    return innerFunction; // Return the inner function
};

var closureFunction = outerFunction(); // "closureFunction" now holds a reference to "innerFunction"
closureFunction(); // Output: I am outer

