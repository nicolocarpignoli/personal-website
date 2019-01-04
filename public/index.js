const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

// start server!
app.listen((process.env.PORT || 5000));
