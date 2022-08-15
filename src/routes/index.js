const express = require("express");
const UserController = require('../controllers/UserController');
const { sequelize } = require('../db');

const routes = express.Router();
const usercontroller = new UserController();

routes.get('/', (request, response) => {
    response.send("Olá mundo!");
 });

 
routes.get('/users', usercontroller.ReadUsers);

routes.post('/createuser', usercontroller.CreateUser);
routes.post('/login', usercontroller.Login);

routes.put('/updateuser/:id', usercontroller.UpdateUser);

routes.delete('/deleteuser/:id', usercontroller.DeleteUser);


module.exports = routes;


