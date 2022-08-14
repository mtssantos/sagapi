const express = require("express");
const { db } = require('../db');

class UserController{
   ReadUsers(request, response) {
     const consulta = db.query("select id, name, username from users", function (error, results, fields){
        if(error) 
            response.json(error);
        else
            response.json(results);
     });
   }
   CreateUser(request, response){
      const { name, username, secretkey } = request.body;
      let command = `insert into users(name, username, secretkey) values ("${name}","${username}","${secretkey}")`;
      const consulta = db.query(command,function (error, results, fields){
        if(error) 
            response.json(error);
        else
            console.log('Adicionou Registros!');
            response.json({message: "Usuário adicionado!"});
     });
   }
   UpdateUser(request, response){
     const { id } = request.params;
     const { name, username, secretkey } = request.body;
     let command = `update users set name="${name}", username="${username}", secretkey="${secretkey}" where id=${id}`;
     const consulta = db.query(command, function (error, results, fields){
        if(error) 
            response.json(error);
        else
            console.log('Alteração Realizada!');
            response.json({message: "Alteração Realizada!"});
     });
   }
   DeleteUser(request, response){
    const { id } = request.params; 
    let command = `delete from users where id=${id}`;
    const consulta = db.query(command, function (error, results, fields){
      if(error) 
          response.json(error);
      else
          console.log('Usuário Deletado!');
          response.json({message: "Usuário Deletado!"});
    });

   }
};

module.exports = UserController;