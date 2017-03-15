var cluster = require("cluster");
var http = require("http");
var numWorkers = 2;


if (cluster.isMaster) {
    // Fork Workers
    for (var i = 0; i < numWorkers; i++) {
        console.log("master : about to fork  a worker");
        cluster.fork();
    }

    cluster.on('fork', worker => console.log("master : fork event (worker " + worker.id + " )"));
    cluster.on('online', worker => console.log("master : online event (worker " + worker.id + " )"));
    cluster.on('listening', (worker, address) => console.log("master : listening event (worker " + worker.id + " ) pid " + worker.pid + " address : " + address));
    cluster.on('exit', (worker, code, signal) => console.log("master : exit event (worker " + worker.id + " )"));
}
else {
    console.log('worker : worker # ' + cluster.worker.id + " ready !");
    var count = 0;

    // Workers can share any TCP connection 
    // In this case its a HTTP server
    http.createServer((req, res) => {
        res.writeHead(200);
        count++;
        console.log("Worker # " + cluster.worker.id + " is incrementing count to " + count);
        res.end("hello World from worker #" + cluster.worker.id + " (pid " + cluster.worker.process.pid + " ) with count " + count + "\n");
        if (count === 3) {
            cluster.worker.destroy();
        }
    }).listen(process.env.PORT, process.env.IP);
}
