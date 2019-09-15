exports.register = function (req, res) {
    // console.log("req", req.body);
    var today = new Date();
    var memberSignin = {
        "email": req.body.email,
        "animal_id": req.body.animal_id,
        "name": req.body.name,
        "nickname": req.body.nickname,
        "carrier": req.body.carrier,
        "telephone": req.body.telephone,
        "image_path": req.body.image_path,
        "introduce": req.body.introduce,
        "created_at": today,
    }
    connenction.query('INSERT INTO Members SET ?' , memberSignin, function (error, results, fields) {
        if (error) {
            console.log("error ocurred", error);
            res.send({
                "code" : 400,
                "failed": "error ocurred"
            })
        } else {
            console.log('The solution is: ', results);
            res.send({
                "code": 200,
                "success": "user registered sucessfully"
            });
        }
    });    
}