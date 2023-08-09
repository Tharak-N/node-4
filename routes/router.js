const express = require('express')

const about = require('./about-router')
const authorization = require('../middlewares/authoriztion');
const login = require('../middlewares/login')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Hola!")
})

router.post('/register', (req, res) => {
    res.status(201).send("Registration successfull")
})

router.post('/login', login())
router.use(authorization())
router.get('/home', (req, res) => {
    res.send("Welcome to Home")
})
router.use('/about-me', about)

module.exports = router;

