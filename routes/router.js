const express = require('express')
const about = require('./about-router')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Hello")
    res.end()
})

router.get('/home', (req, res) => {
    res.send("Welcome to Home")
    res.end()
})

router.use('/about', about)

module.exports = router;

