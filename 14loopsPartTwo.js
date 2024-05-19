//foreach is considered as method, rather than loop and it's a loop at the end of the day

/* forEach : loop is a higher-order function that allows you to iterate over elements of an array
and perform a specified action on each element. 
It simplifies the process of iterating over arrays compared to traditional for loops.
 */

const myStates = ["Delhi",
"Karnataka",
  1947,
 "Tamil Nadu",
 "Maharastra",
 "Punjab"
];

var z = 0;


// for (;;) {
//     if ( z > 10) break;
//     console.log(z);
//     z++
// } //bad way of coding for loops this has the potential to mess the entire team effors

myStates.forEach( (s) => (console.log(s)));