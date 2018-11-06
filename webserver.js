//require the animals.js file from the data folder, store it in a variable
var animals = require('./data/animals.js');

//require express
var express = require('express');

//make the server
var server = express();

//add the static folder and point it at the html folder
server.use(express.static(__dirname + '/html'));

//make an endpoint to get data for all animals
	//return the animals data
server.get('/data',function(request, response){
	var jsonAnimals = JSON.stringify(animals);
	response.send(jsonAnimals);
})





//make the server listen for connections on port 3000
server.listen(3000, function() {
	console.log('I am listening')
});