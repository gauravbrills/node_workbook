var fun = require("../testing/mathfun");

process.on('message', m => {
    if (m.cmd === 'double') {
        console.log('hs: I was asked to double ' + m.number);
        fun.evenDoubler(m.number, (err, result) => process.send({
            answer: result
        }) );
    }
    else if (m.cmd === 'done') {
        process.exit();
    }
});
