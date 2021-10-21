const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    fs.readFile(path.resolve(__dirname, '../data/regions.json'), (err, data) => {
        if (err) {
            res.status(400).send(err.message);
        }
        res.send(JSON.parse(data));
    });
})

module.exports = router;
