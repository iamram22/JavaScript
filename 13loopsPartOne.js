// syntax : for(initializer; condition; incrementer/decrementer;)
// we can also use use k,j,a instead of i, but it is NOT a good programming practice

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

// while(i < myStates.length){
//     console.log(myStates[i]);
//     i++
// }


// do {
//     console.log(myStates[i]);
//     i++;
// } while(i < myStates.length);


//do while loop runs/executes once and checks 
k = 25

do {
    console.log(k);
    k++
} while(k < 10)

