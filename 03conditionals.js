//conditionals help us to do check for multiple statements and return a block of code 

//1. using if and else

var temperature;

//TODO: go to google and get the data

temperature = 20;

if (temperature < 20) {
    console.log("It is cold outside");
}
if (temperature < 30) {
    console.log("It is moderate outside");
} else {
    console.log("It is hot outside");
};


//another example using logical operators 

var email = true;
var facebook = false;
var google = false;

if (email || facebook || google) { 
    console.log("Login success");
}; //&& can also be used to check if all the conditions hold true

//another example using Ternary operator 
// condition ? run this code : run this code instead
 
var authenticated = true;

authenticated ? console.log("show dashboard") : console.log("Access denied");


//another example using switch and case

var user = "testprep";

switch (user) {
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("You get access create/delete courses");
        break;
    case "testprep":
        console.log("You get the access create/delete tests");
        break;
    case "user":
        console.log("You get full access to consume the content");
        break;

    default:
        console.log("Trail User");
        break;
};


//understanding truthy and falsy
//null, undefined, 0, "", and NaN are falsy values and everything apart from these are truthy values

var user = "2";

if (2 == user) {
    console.log("Condition is true");
} else {
    console.log("Condition is false");
}

var myUser = "2"

if (2 === myUser) { // === makes strict checking for data types
    console.log("Condition is true");
} else {
    console.log("Condition is false");
};

