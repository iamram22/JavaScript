// syntax : for(initializer; condition; incrementer/decrementer;)
/* You can think of a loop as a computerized version of the game where you tell someone to take X steps in one direction,
 then Y steps in another. For example, the idea "Go five steps to the east" could be expressed this way as a loop */

for(let i = 0; i < 10; i++){
    console.log(i);
};

/* for loop: This is a fundamental looping construct used to iterate over a block of code multiple times.
It consists of three parts: initialization, condition, and increment/decrement. */



const myStates = ["Delhi",
 "Karnataka",
  1947,
 "Tamil Nadu",
 "Maharastra",
 "Punjab"
];

// for(let i = 0; i < myStates.length; i++) {
//     if( typeof myStates[i] !== "string") break;
//     console.log(myStates[i]);
// }



/* while loop : is a control flow statement that allows you to execute a block of code repeatedly as long as
 a specified condition evaluates to true. Its basic syntax looks like this

If the condition is true, the code inside the loop is executed. If the condition is false initially, 
the code block inside the loop will never execute.
 */

let i = 0;

while(i < myStates.length){
    console.log(myStates[i]);
    i++
};

/* After the code block executes, the program goes back to the while statement and evaluates the condition again.
If the condition is still true, the code block executes again. This process continues until the condition becomes false.
Once the condition is false, the loop terminates, and the program moves on to the code after the loop. */


/* do...while loop : is a control flow statement that executes a block of code repeatedly until a specified condition evaluates to false.
The key difference between a do...while loop and a while loop is that in a do...while loop, 
the condition is evaluated after the block of code is executed, meaning the block of code is guaranteed to execute at least once.
 */

do {
    console.log(myStates[i]);
    i++;
} while(i < myStates.length);


k = 25;

do {
    console.log(k);
    k++
} while(k < 10);
 
// we can also use use k,j,a instead of i, but it is NOT a good programming practice
// yes I have initialised by k instead of i, just to know that it works!



