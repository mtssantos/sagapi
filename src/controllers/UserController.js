const express = require("express");
const { db } = require('../db');

class UserController{
   ReadUsers(request, response) {
     const consulta = db.query("select * from users", function (error, results, fields){
        if(error) 
            response.json(error);
        else
            response.json(results);
     });
   }
};

module.exports = UserController;