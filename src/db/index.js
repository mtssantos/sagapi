const mysql = require("mysql");

const db = mysql.createConnection({
    host: "database-sag.cxquo8blexhf.us-east-1.rds.amazonaws.com",
    port: "3306",
    user: "admin",
    password: "SantoGraal",
    database: "sag"
});

module.exports = {
    db
};