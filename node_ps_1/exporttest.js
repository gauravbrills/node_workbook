var mathFun = require("./callback");

var handleResults = function(err, results, time) {
    if (err) {
        console.log("ERROR " + err.message);
    }
    else {
        console.log("Results are : " + results + " (" + time + " ms)");
    }
};


for(var i=0;i<10;i++){
    console.log("Calling event double with param "+i);
    mathFun.eventDoubler(i,handleResults);
}
console.log('Foo from require '+mathFun.foo);
console.log('maxtime from require '+mathFun.maxTime);