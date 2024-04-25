const names = ["Youtube", "facebook", "Instagram", "Netflix", "Amazon"]

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

for(const z in symbols) {
    console.log(symbols[z]);
}

for (const e in symbols) {
    console.log(`Key is ${e} and the value is ${symbols[e]}`)

}








