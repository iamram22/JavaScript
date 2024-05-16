//Operators : as the name says operators perform perticular operations

//1 Assignment operators "=" followed by " +, -, /, *"
x = 5;
y = 10;

a = x * y; 
b = x + y ;
c = x * y;
d = y/x ;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

// comparison operator : a logical value (true or false) is returned 
// " ==, !==, ===, <=, >=, >, <, "

aa = 55;
bb = "55";
console.log(aa == bb);
console.log(aa === bb); // === goes for strict checking and diggs in for data type match


var num1 = 7;
var num2 = 6;

console.log(num1 * num2);

var answer = num1 > num2;

console.log(answer);

var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice)/listingPrice) * 100

// console.log("Discounted Price " + discountPercent);

displayDiscountPercentage = Math.round(discountPercent)

console.log(displayDiscountPercentage + "% off"); 

console.log(typeof displayDiscountPercentage);

//Logical operators : below explaination from mdn docs, refer 03conditionals for example.
/* Logical operators are typically used with Boolean (logical) values; 
when they are, they return a Boolean value. 
However, the && and || operators actually return the value of one of the specified operands, 
so if these operators are used with non-Boolean values, 
they may return a non-Boolean value. The logical operators are described in the following table.*/




