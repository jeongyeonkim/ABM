//const sql = require('mysql');
const http = require('http');

const hostname = '127.0.0.1';
const port = 4500;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

console.log("Hello world, This is an app to connect to sql server.");
var config = {
        "user": "abm", //default is sa
        "password": "abm2019!",
        "server": "localhost", // for local machine
        "database": "abm", // name of database
        "options": {
            "encrypt": true
        }
      }

    /*sql.connect(config, err => {
    if(err){
        throw err ;
    }
    console.log("Connection Successful !");

    new sql.Request().query('select 1 as number', (err, result) => {
        //handle err
        console.dir(result)
        // This example uses callbacks strategy for getting results.
    })
  });

  sql.on('error', err => {
      // ... error handler 
      console.log("Sql database connection error " ,err);
  })*/