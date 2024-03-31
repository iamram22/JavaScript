//Functions are scanned made available
//variables are scanned and made undefined (including the functions stored as variables)

function tipper(a) {
    var bill = a;
    console.log(bill + 5);
}
tipper(5);

bigTipper("150");

function bigTipper(bill) {
    console.log(parseInt(bill) + 10);
}


biggestTipper();

var biggestTipper =  function (b) {
    var bill = parseInt(b);
    console.log(bill + 25);
}


