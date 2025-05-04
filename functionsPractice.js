function myCoffee(type, sugar) {
    console.log(`your ${type} coffee with ${sugar} is ready`);
};
myCoffee("Espresso", "Mild Sugar")

function addNum(num1, num2){
    const a = parseInt(num1);
    const b = parseInt(num2);
    return a + b;
};
let result = addNum(2, "10pixels");
console.log("The sum is ", result); 
console.log(`The sum is ${result}`);

//arrow function
const multiply = (a,b) => a * b;

console.log(multiply(10,10));

//nested functions

const prepareMeal = () => {
    const cutVeggies = () => {
        console.log("Veggies chopped");
    }
    const cookFood = () => {
        console.log("food is coocked");
    }
    cutVeggies();
    cookFood();
    console.log("It is lunch time guys");
}
prepareMeal();

//callback functions, passing functions as arguments

function orderFood(param1) {
    console.log("Your order is palced 😍😍");
    setTimeout(() => {
        param1("your food has been delivered");
    }, 3000);
}
orderFood(msg => console.log(msg));


