//v2
'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('This server powered by Omri Ziner,The instance is a aws ec2 instance, on the server we run nodejs webserver on docker container. Yogi & Goku - start working!');
});

app.listen(PORT, HOST);
console.log('Running on http://${HOST}:${PORT}');
