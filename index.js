var express = require('express');

const PORT = process.env.PORT || 3000

var app = express();

app.listen(PORT, () => {
  console.log('서버가 http://34.125.169.162:' + PORT + '에서 작동하고 있습니다.');
})
