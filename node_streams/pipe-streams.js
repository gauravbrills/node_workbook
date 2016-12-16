var request = require("request");


var s = request('http://www.pluralsight.com');

s.pipe(process.stdout);