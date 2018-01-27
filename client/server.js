const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/dist`)); // set the static files location

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

function listening() {
  /* eslint-disable */
	console.log('Client started listening on:', this.address().port);
}

app.listen(9090, listening);

