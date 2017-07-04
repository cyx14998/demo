var fs = require('fs');
var js = require('./JSON.js');
var readFile = function(__dirname){
	fs.readFile(__dirname, {flag: 'r+', encoding: 'utf8'}, function (err, data) {
	    if(err) {
			console.error(err);
			return;
	    }
	    console.log(data);
	});
}


function* gen(){
    var file1 = yield readFile('./JSON.js');
    var file2 = yield readFile('./readme.md');
}
var g = gen();
g.next().value;
g.next().value;



