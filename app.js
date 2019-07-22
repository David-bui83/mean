const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 7000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public/dist/public'));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(PORT,()=>{`Listening on port ${PORT}`});