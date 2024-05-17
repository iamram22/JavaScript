//Global scope

var name = "Ramakrishna";

console.log("line no 3", name);

// function sayName(){
//     console.log("line no 8", name);
// }
// sayName();

function sayName() {
    // var name = "name1";
    console.log("Line no 14", name);
    sayNameTwo();
    function sayNameTwo(){
        // var name = "Mr.Kumbar"
        console.log("line no 15", name);
    }
}
sayName();

var name = "Ramakrishna";

console.log("line no 25", name);

// function sayNaaame(){
//     console.log("line no 6", name);
// }
// sayNaaame();

function sayNaaame() {
    // var name = "name1";
    console.log("Line no 34", name);
    sayNaaameTwo();
    function sayNaaameTwo(){
        // var name = "Mr.Kumbar"
        console.log("line no 38", name);
    }
}
sayNaaame(); 
