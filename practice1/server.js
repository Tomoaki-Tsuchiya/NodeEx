//node practice to create a server
var http = require('http');

var stdin = process.openStdin(); 
//require('tty').setRawMode(true);    



http.createServer(function(request,response){
    response.writeHead(200);
    response.write('<h1>Hello! World </h1>¥n');
    //キーの入力をそのまま反映できるか！？→下記では不可能
    stdin.on('keypress', function (chunk, key) {
        process.stdout.write('Get Chunk: ' + chunk + '\n');
        if (key && key.ctrl && key.name == 'c') process.exit();
      });
    response.end();
}).listen(3000);
console.log("Sever is running at http://localhost:3000");

