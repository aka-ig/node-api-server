const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const config = require('./config');
const apiRouter = require('./api');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(config.port, () => {
    console.log(`Example app listening at http://localhost:${config.port}`)
});
