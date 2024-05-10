const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'ajax.html'));
});

app.listen(3000, () => {
    console.log("Server Is Running");
});