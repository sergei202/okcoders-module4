const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/okcoders');


const Kid = mongoose.model('Kid', {
	name: String,
	age: Number,
	gender: String,		// M or F
});


// addKid({name:'Little Sergei'})
// updateKid({name:'Little Sergei', age:9})
removeKid('Little Sergei')
	.then(getKids)
	.then(console.log);



function getKids() {
	return Kid.find().exec();
}

function addKid(kid) {
	kid = new Kid(kid);
	return kid.save();
}

function updateKid(kid) {
	return Kid.findOneAndUpdate({name:kid.name}, kid, {new:true}).exec();
}

function removeKid(kidName) {
	return Kid.findOneAndRemove({name:kidName}).exec();
}
