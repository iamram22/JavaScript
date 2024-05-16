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

//parseInt will converted the string "150" to variable 150, Js is Js for a reason you should know to deBUG :)


biggestTipper();

var biggestTipper =  function (b) {
    var bill = parseInt(b);
    console.log(bill + 25);
}

//biggestTipper is variable and it's made undefined as it is invoked before the code ay like 19.
//if "var" is removed at line 21, biggestTipper will be a normal function

