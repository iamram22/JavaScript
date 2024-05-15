// using self-executing anonymous functions for understanding lexical scoping

(function init() {
    var name = "lexical scoping";
    (function sayName() {
        console.log(name);
    })();
})();

