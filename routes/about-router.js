const express = require('express');

const auth = require('../middlewares/token')

const router = express.Router()

router.get('/', (req, res) => {
    res.send("This is tharak")
})


module.exports = router;
