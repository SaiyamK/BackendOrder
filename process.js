const express = require('express');

const app = express();

app.use(express.urlencoded());

app.get('/', function(request, response, next){

	response.send(`
    `);
});

app.post('/', function(request, response, next){

	response.send(request.body);

});

app.listen(2000);
