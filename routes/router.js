const express = require('express')

const about = require('./about-router')
const authorization = require('../middlewares/authoriztion');
const login = require('../middlewares/login')
const router = express.Router()

router
.get('/', (req, res) => {
    res.send("Hola!")
})
.post('/register', (req, res) => {
    res.status(201).send("Registration successfull")
})
.post('/login', login())
.use(authorization())
.get('/home', (req, res) => {
    res.send("Welcome to Home")
})
.use('/about-me', about)

module.exports = router;

