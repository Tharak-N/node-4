
const auth = require('../utilities/token')

const login = () => (req, res) => {
    let data = req.body
    let token = auth.generateToken(data)
    res.status(200).json({
        token: token
    })
}

module.exports = login