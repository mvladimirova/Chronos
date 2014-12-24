var express = require('express'),
    app = express(),
    loginFunctionality = require('./routes/login'),
    homeFunctionality = require('./routes/home'),
    jsonParser = require('body-parser').json;

app.use(jsonParser());


app.get('/', homeFunctionality.home);

app.post('/createUser', loginFunctionality.createNewUser);

app.get('/login', loginFunctionality.login);

app.listen(1337);