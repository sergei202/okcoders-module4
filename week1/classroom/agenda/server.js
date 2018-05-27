const express = require('express');		// Import the express module

const MongoClient = require('mongodb').MongoClient;


// Create express server
const app = express();					// Create our express application
app.listen(8080, err => {				// Listen on port 8080 and define a callback
	console.log('Agenda Server.  Listening on port 8080');
});


MongoClient.connect('mongodb://localhost:27017', (err,db) => {
	if(err) throw(err);
	var dbo = db.db('okcoders');

	app.get('/', (req,res) => {
		dbo.collection('agenda').find({}).toArray((err,result) => {
			res.json(result);
		});
	});

	app.get('/add/:item', (req,res) => {
		dbo.collection('agenda').insert({name:req.params.item}, (err,result) => {
			res.json(result);
		});
	});

});
