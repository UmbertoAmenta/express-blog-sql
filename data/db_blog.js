const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1lmD8xBxIFsaC!",
  database: "db_blog",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL!");
});
module.exports = connection;
