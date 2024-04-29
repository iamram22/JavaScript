//another and recommendedd way of defining objects(functional aproach)

var User = function(firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`The course count is: ${this.courseCount}`);
    };
};

User.prototype.getFirstName = function() {
    console.log(`Your first Name is : ${this.firstName}`);
};

var ramakrishna = new User ("Ramakrishna", 29);
// console.log(ramakrishna);
// ramakrishna.getCourseCount();
ramakrishna.getFirstName();
ramakrishna.getCourseCount();

var veerappa = new User ("Veeresh", 39);
veerappa.getFirstName();
veerappa.getCourseCount();

var meera = new User("vaishnavi", 23)

if (meera.hasOwnProperty("firstNamee")) {
    meera.getFirstName();
} else {
    console.log("Invalid Property");
}

//more info from MDN docs : The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.


