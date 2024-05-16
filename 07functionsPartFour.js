//Global scope


var name = "Ramakrishna";

console.log("line no 3", name);

// function sayName(){
//     console.log("line no 6", name);
// }
// sayName();

function sayName() {
    // var name = "name1";
    console.log("Line no 12", name);
    sayNameTwo();
    function sayNameTwo(){
        // var name = "Mr.Kumbar"
        console.log("line no 15", name);
    }
}
sayName();

var name = "Ramakrishna";

console.log("line no 21", name);

// function sayNaaame(){
//     console.log("line no 6", name);
// }
// sayNaaame();

function sayNaaame() {
    // var name = "name1";
    console.log("Line no 31", name);
    sayNaaameTwo();
    function sayNaaameTwo(){
        // var name = "Mr.Kumbar"
        console.log("line no 36", name);
    }
}
sayNaaame(); 
