const express = require('express');
const app = express();

app.use(express.static('public'));

// start server
app.listen((process.env.PORT || 5000));

