console.log(this); // this will return an empty object

/* this keyword refers to the context where a piece of code, such as a function's body,
is supposed to run. Most typically, it is used in object methods, 
where this refers to the object that the method is attached to, 
thus allowing the same method to be reused on different objects */

var user = {
    firstName : "Ramakrishna",
    courseCount : 34,
    getCourseCount : function () {
        console.log("line 8", this);
    }
};

user.getCourseCount()

/* Inside a function, the value of this depends on how the function is called. 
Think about this as a hidden parameter of a function — just like the parameters
declared in the function definition, this is a binding that the language creates
for you when the function body is evaluated. */

/* For a regular function (not an arrow function, bound function, etc.), 
the value of this is the object that the function is accessed on. In other words, 
if the function call is in the form obj.f(), then this refers to obj. For example */