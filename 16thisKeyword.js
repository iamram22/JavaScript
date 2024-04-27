console.log(this);
// this will return an empty object

var user = {
    firstName : "Ramakrishna",
    courseCount : 34,
    getCourseCount : function () {
        console.log("line 7", this);
    }
};

user.getCourseCount()