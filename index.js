var express = require('express');

var PORT = 3000;
var HOST = '34.125.169.162';

var app = express();

app.listen(PORT, HOST);
console.log('서버가 http://34.125.169.162:' + PORT + '에서 작동하고 있습니다.');
