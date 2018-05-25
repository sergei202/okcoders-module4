# Homework - Week 1

## Part 1

Setup an Express server **FROM SCRATCH**.  Don't use or look at your old code unless you really get stuck.
I want you guys to get comfortable with Express and routes.  Doing it from scratch will get you there.

You will build:
- An express server (you can call this `part1.js` in a `week1` directory)
- Create a GET route that will increment a counter starting at 0

### Hints
- https://expressjs.com/en/starter/hello-world.html
- Don't forget to `npm install express`


## Part 2

We're going to create a very simple node program to model a car dealership's inventory.

Create a new node program called `part2.js` that will use MongoDB/Mongoose as the database.

We'll need to track these properties for each car in inventory:
- Make
- Model
- Year
- Color
- VIN

Here's an example of a car document:
```js
{
	make: 'Honda',
	model: 'Accord',
	year: '2007',
	color: 'blue',
	vin: '1G1JE5SHXC4195830'
}
```

Create two functions to interact with our database:
- `getCars()`: Returns a Promise with an array of the documents
- `createCar(car)`: Creates and saves a car document (and returns the saved document)

Use these functions to create a car and then list all cars.  Here is an example:

```js
createCar({
	make: 'Honda',
	model: 'Accord',
	year: '2007',
	color: 'blue',
	vin: '1G1JE5SHXC4195830'
}).then(honda => {						// .then() only runs after createCar() is finished (when the problem is resolved)
	console.log('createCar() returned %j', honda);
	return getCars().then(cars => {		// Same with this .then(), it only runs after getCars() finishes
		console.log('getCars() returned %j', cars);
	});
});
```

If your two functions (`getCars()` and `createCar()`) are written correctly, you'll see the two console outputs AND have data in the `cars` collection.
Check with Robo3T to make sure you have data there!


### Hints
- http://mongoosejs.com/docs/index.html
- [Javascript Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- Don't forget to `npm install mongoose`
- This is server-side ONLY, no Angular, no browser
- If something doesn't make sense, ASK QUESTIONS!
