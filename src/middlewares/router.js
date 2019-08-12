router.get('/create', function(req, res, next) {
    client.query("SELECT * FROM members;", function(err, result, fields){
      if(err){
        console.log(err);
        console.log("쿼리문에 오류가 있습니다.");
      }
      else{
        res.render('create', {
          results: result
        });
      }
    });
  });
  
  router.post('/create', function(req, res, next) {
    var body = req.body;
  
    client.query("INSERT INTO products (name, modelnumber, series) VALUES (?, ?, ?)", [
      body.name, body.modelnumber, body.series
    ], function(){
      res.redirect("/create");
    });
  });