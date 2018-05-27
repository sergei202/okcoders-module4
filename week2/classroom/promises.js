function delay(ms) {
	return new Promise((resolve,reject) => {
		setTimeout(() => resolve(), ms);
	});
}

delay(1500)
	.then(() => console.log('Done!'))
	.then(() => delay(1500))
	.then(() => console.log('Done again!'))
