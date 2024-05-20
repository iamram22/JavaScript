const names = ["Youtube", "facebook", "Instagram", "Netflix", "Amazon"];

//printing the elements of array (by using for...of loops)
/* for...of : is used to iterate over iterable objects such as arrays,
strings, maps, sets, and more. */

for(const z of names) {
    console.log(z);
}
const symbols = {
    yt : "Youtube",
    ig : "Instagram",
    fb : "facebook",
    nt : "Netflix",
    az : "Amazon"
}

/* for...in : oop is used to iterate over the properties of an object. 
 */
for(const z in symbols) {
    console.log(symbols[z]);
} //this prints the values 

for(const e in symbols){
    console.log(e);
}//this prints the keys


for (const e in symbols) {
    console.log(`Key is : ${e} and the value is ${symbols[e]}`)

}








