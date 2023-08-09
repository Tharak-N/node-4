const express = require('express')

const about = require('./about-router')
const auth = require('../middlewares/token')
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Hola!")
})

router.post('/register', (req, res) => {
    res.status(201).send("Registration successfull")
})

router.post('/login', (req, res) => {
    let data = req.body
    let token = auth.generateToken(data)
    res.status(200).json({
        token: token
    })
})

router.use(
    (req, res, next) => {
        let token = req.headers['authorization'];
        let isVerified = auth.tokenVerify(token)

        if(!!isVerified) next()
        else res.status(401).end("Token Expired")
    }
)

router.get('/home', (req, res) => {
    res.send("Welcome to Home")
})

router.use('/about-me', about)

module.exports = router;

