const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (request, response) => {
   response.send("Olá mundo!");
})

server.listen(80);