// from mdn : An object is a collection of properties, 
// and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.


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
//as the name says "console.table" the output key and value is printed in a table format.

var iPhone15 = {
    display : "New",
    camera : "Old but improved, especially while recording videos ",
    battery : "marginally big and drastically good optimization",
    Pricing : "80,000 INR same as last year iPhone 14",
    Charging : "Usb type C this time finally and not so good quality",
    Warranty : "1 year replacement/repair (No Change)",
    Design : "remains same for NON-PRO models",
    Packing : "Similar to iPhone 14"
}

console.table(iPhone15)
