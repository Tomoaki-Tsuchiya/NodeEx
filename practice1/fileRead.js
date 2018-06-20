
console.log (__dirname);
var fs = require('fs');
fs.readFile('__dirname/file.txt',function(error,data){
    console.log(data);
})

