const path = require('path');
const express = require('express');
const app = express();

// Render the app
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

// start server!
app.listen(process.env.PORT);
