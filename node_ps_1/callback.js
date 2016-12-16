var maxTime = 1000;

var eventDoubler = function(v, callback) {
    var waitTime = Math.floor(Math.random() * (maxTime + 1));
    if (v % 2) {
        setTimeout(function() {
            callback(new Error("Odd Input"));
        }, waitTime);
    }
    else {
        setTimeout(function() {
            callback(null, v * 2, waitTime);
        }, waitTime);
    }
};

var handleResults = function(err, results, time) {
    if (err) {
        console.log("ERROR " + err.message);
    }
    else {
        console.log("Results are : " + results + " (" + time + " ms)");
    }
};


eventDoubler(2, handleResults);

console.log("_____");

module.exports.eventDoubler = eventDoubler;
module.exports.foo ='bar';