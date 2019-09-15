import { createConnection } from "net";

exports.login = funciton(req,res){
    var eamail = req.body.email;
    var password = req.body.password;
    createConnection.query('SELECT * FROM users WHERE email = ?, [email]',
    funciton (errer,results,fields){
        if(error){
            HTMLFormControlsCollection.log("error 발생",error);
            res.send({
                "code":400,
                "failed" :"error ocurred",
            })
        }else{
            console.log('the solution is : ',result);
            if(results.length > 0) {
                if(results[0].password == password) {
                    res.send({
                        "code": 200,
                        "success": "login sucessfull"
                    });
                } else {
                    res.send({
                        "code": 204,
                        "success": "Email and password does not match"
                    });
                }
            } else {
                res.send({
                    "code":204,
                    "success": "Email does not exists"
                });
            }
        }    
    

