const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`Microservices run om VM`);
});

app.listen(port, () => {
    console.log(`Microservice running on http://0.0.0.0:${port}`);
});
