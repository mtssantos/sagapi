const express = require("express");
const knex = require('../db');

class UserController{
  async ReadUsers(request, response) {
    const user = await knex('users')
      .select('id')
      .select('name')
      .select('username');
    
    return response.json(user);
   }
   async CreateUser(request, response, next){
    try {
      const { name, username, secretkey } = request.body;

      await knex('users').insert({
        name,
        username,
        secretkey
      });
  
      return response.status(201).send();
    } catch (error) {
      next(error);
    }
   }
   async UpdateUser(request, response, next){
    try {
      const { id } = request.params;
      const { name, username, secretkey } = request.body; 

      await knex('users').update({
        name,
        username,
        secretkey
      }).where({ id });

      response.send();
    } catch (error) {
      next(error);
    }
   }
   async DeleteUser(request, response, next){
    try {
      const { id } = request.params;

      await knex('users').where({ id }).del();

      response.send();
    } catch (error) {
      next(error);
    }    
   }
   async Login(request, response, next){
    try {
      const { username, secretkey } = request.body;
      await knex('users').where({ username: username, secretkey: secretkey }).select().toSQL();

      response.status(201).send();
    } catch (error) {
      next(error);
    }    
   }

};

module.exports = UserController;