const express = require('express');

const app = express();

app.listen(8000);

var count = 0;
app.get('/', (req,res) => {
	res.send('Count: '+count);
});
