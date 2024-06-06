/* In JavaScript, a "call" is a method that allows you to invoke a function with a specified "this" context and arguments.
It's primarily used to control the context in which a function is executed. */

let learnAboutCall = function(){
    console.log("learning about call() is important for an " + this.name );
};

let learner = {
    name : "Intermediate learner"
};

//using call to invoke "learnAboutCall" function
//with "learner" as this value

learnAboutCall.call(learner)

/* The call() method is available on all JavaScript functions. When you call a function using "call()",
you can pass in the object that you want to be treated as the "this" value inside the function.
Additionally, you can pass in any number of arguments that the function expects. */

