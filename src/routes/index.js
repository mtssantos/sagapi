const express = require("express");
const UserController = require('../controllers/UserController');
const { db } = require('../db');

const routes = express.Router();
const usercontroller = new UserController();

routes.get('/', (request, response) => {
    response.send("Olá mundo!");
 });
 
routes.get('/database', (request, response) => {
    db.connect(err => {
       if(err){
          console.log(err.message);
          return
       }
    })
});
 
routes.get('/users', usercontroller.ReadUsers);

module.exports = routes;


