'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('This site powered by OmriZiner.The instance is aws@ec2. the server is nodejs running in docker container tec');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);