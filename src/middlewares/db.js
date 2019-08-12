var mysql = require('koa-mysql');

var db = mysql.createPool({
    
    user: 'abm',
    password:'abm2019!',
    database:'abm',
    host: 'localhost'
});
sd

var app = koa();
 
// Run sample app
app.use(function* () {
    try {
        // Execute a sample query (with params)
        var rows = yield db.query("select ? + ? as test", [1, 2]);
 
        // Output test result (3)
        this.body = { test: rows[0].test };
    }
    catch (err) {
        // 500 Internal Server Error
        this.status = 500;
        this.body = { error: err };
    }
});
 
// HTTP port
var port = process.env.PORT || 4500;
 
// Listen for connections
app.listen(port);
 
// Log porta
console.log('Server listening on port ' + port);