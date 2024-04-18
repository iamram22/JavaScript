//foreach is considered as method, rather than loop and it's a loop at the end of the day

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