// using self-executing anonymous functions for understanding lexical scoping

(function init() {
    var name = "lexical scoping";
    (function sayName() {
        console.log(name);
    })();
})();

//closure using functions

function onit() {
    var name = "Lexical Scoping"
    console.log("line NO 11");

    function sayLexicalScoping() {
        console.log(`Learn Closure, it is important ${name}`);
    } return sayLexicalScoping
}

var audi = onit();
audi();
