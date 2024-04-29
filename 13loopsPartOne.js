// syntax : for(initializer; condition; incrementer/decrementer;)
// You can think of a loop as a computerized version of the game where you tell someone to take X steps in one direction, then Y steps in another. For example, the idea "Go five steps to the east" could be expressed this way as a loop:

for(let i = 0; i < 10; i++){
    console.log(i);
}

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

let i = 0;

while(i < myStates.length){
    console.log(myStates[i]);
    i++
}


do {
    console.log(myStates[i]);
    i++;
} while(i < myStates.length);


k = 25

do {
    console.log(k);
    k++
} while(k < 10)
//do while loop runs/executes once and checks 
// we can also use use k,j,a instead of i, but it is NOT a good programming practice
// yes I have initialised by k instead of i, just to know that it works!



