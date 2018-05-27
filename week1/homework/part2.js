const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/okcoders-part2');

const Car = mongoose.model('Car', {
	make: String,
	model: String,
	year: Number,
	color: String,
	vin: String
});


function createCar(car) {
	car = new Car(car);
	return car.save();
}

function getCars() {
	return Car.find().exec();
}

createCar({
	model: 'New Car'
}).then(getCars).then(console.log);



// createCar({
// 	model: 'Acura'
// }).then(car => {
// 	console.log('createCar returned: %j', car);
// });
