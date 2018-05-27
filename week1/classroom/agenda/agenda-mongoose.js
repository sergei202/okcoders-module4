const mongoose = require('mongoose');
const express = require('express');		// Import the express module

// Create express server
const app = express();					// Create our express application
app.listen(8080, err => {				// Listen on port 8080 and define a callback
	console.log('Agenda Server.  Listening on port 8080');
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/okcoders');

// Create our Agenda model
const Agenda = mongoose.model('Agenda', {
	name: String
}, 'agenda');


app.get('/', (req,res) => {
	getAgenda().then(items => {
		res.json(items);
	});
});

app.get('/add/:name', (req,res) => {
	addAgenda({name:req.params.name})
		.then(getAgenda)
		.then(items => {
			res.json(items);
		});
});

function getAgenda() {
	return Agenda.find().exec();
}

function addAgenda(agenda) {
	return new Agenda(agenda).save();
}
