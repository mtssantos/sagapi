const express = require('express');
const { db } = require('./db');

const server = express();

server.use(express.json());

server.get('/', (request, response) => {
   response.send("Olá mundo!");
});

server.get('/database', (request, response) => {
   db.connect(err => {
      if(err){
         console.log(err.message);
         return
      }
      response.send("Banco de dados Conectado!");
   })
})

server.listen(3333);