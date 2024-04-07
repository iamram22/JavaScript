// from mdn : An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.

var user = {
    firsName : "Ramakrishna",
    lastName : "Kumbar",
    role: "Admin",
    loginCount : 32,
    facebookSignedIn : true
};

console.log(user.firsName);

user.loginCount = 56;

console.log(user.loginCount);

console.table(user);

// console.log(user);