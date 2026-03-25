let express = require('express');
let app = express();

console.log("Hello World");

app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT);

module.exports = app;




































 module.exports = app;
