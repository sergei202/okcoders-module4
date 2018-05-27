const  express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/okcoders');

const app = express();
app.listen(8000);

const Item = mongoose.model('Item', {
	name: String,
	price: Number,
	qty: Number
});


function getItems() {
	return Item.find().sort('price').exec();
}

function createItem(item) {
	var item = new Item(item);
	return item.save();
}

app.get('/', (req,res) => {
	getItems().then(items => {
		res.json(items);
	});
});

// Go to http://localhost/add/Hat/10
app.get('/add/:name/:qty', (req,res) => {
	createItem({
		name: req.params.name,
		qty: +req.params.qty
	}).then(item => res.json(item));
});
