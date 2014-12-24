/**
 * Created by Bozhidar on 23.12.2014
 * Contains the login and create new user functionality
 */

exports.login = function(request, response){
    body = request.body;
    if(body['username'] != 'test' || body['password'] != 'Asd123'){
        response.send(404, "Invalid UserName or Password");
    }
    else{
        response.body = {FirstName: 'Zaphod', LastName:"Beeblebrox"};
        response.status(200);
        response.send();
    }
};

exports.createNewUser = function(req, res){
    body = req.body;
    // For mocking purposes add scenarios here
    if(body['username'] == 'test'){
        res.send(500, "User name already taken!");
    }
    if(body['email'] == 'test@outlook.com'){
        res.send(500, "User name already taken!");
    }

    res.send(201, "New user successfully created!");
};