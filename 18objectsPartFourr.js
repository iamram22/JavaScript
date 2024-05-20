var User = {
    name: "",
    getUserName : function() {
        console.log(`User name is ${this.name}`);
    },
};


/* Object.create is a method in JavaScript that allows you to create a new object with
a specified prototype object and optional properties. It provides a way to create objects
with a specific prototype without having to define a constructor function */

var Ram = Object.create(User)
Ram.name = "Ramakrishna Kumbar"
Ram.getUserName();