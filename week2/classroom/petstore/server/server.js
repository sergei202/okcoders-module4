/********************************************************************
 * Pet Store express + MongoDB example
 * /api/add/:type/:name - Add new Animal
 * /api/all             - List all animals
 * /api/available       - List animals that need to be adopted
 * /api/adopt/:name     - Adopt an animal by name
 *******************************************************************/

const  express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/okcoders');

const app = express();
app.listen(8000);

// Define our Animal model
const Animal = mongoose.model('Animal', {
	name: String,
	type: {type:String},		// cat or dog
	adopted: Boolean
});


app.get('/api/all', (req,res) => {
	Animal.find().then(animals => res.json(animals));
});

app.get('/api/available', (req,res) => {
	Animal.find({adopted:false}).then(animals => res.json(animals));
});

app.get('/api/add/:type/:name', (req,res) => {
	var animal = new Animal({
		name: req.params.name,
		type: req.params.type,
		adopted: false
	});
	animal.save().then(doc => res.json(doc));
});

app.get('/api/adopt/:name', (req,res) => {
	// Try to find the animal by name
	Animal.findOne({name:req.params.name}).exec().then(animal => {
		if(!animal) return res.status(400).send('Failed to find animal by that name!');
		animal.adopted = true;
		animal.save().then(doc => res.json(doc));
	});
});
