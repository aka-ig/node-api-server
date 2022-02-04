const express = require('express');
const router = express.Router();
const regionsRouter = require('./regions');
const usStatesRouter = require('./us-states');

// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//     console.log('Time: ', Date.now())
//     next()
// })
// define the home page route
router.get('/', function (req, res) {
    res.send('API page')
});

// define the regions route
router.use('/regions', regionsRouter);
router.use('/us-states', usStatesRouter);

module.exports = router;
