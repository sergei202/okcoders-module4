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

### Hints
- http://mongoosejs.com/docs/index.html
- Don't forget to `npm install express`
- If something doesn't make sense, ASK QUESTIONS!
