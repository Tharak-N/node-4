
const auth = require('../utilities/token')

const authorization = () => (req, res, next) => {
    let token = req.headers['authorization'].split('Bearer ')[1];
    let isVerified = auth.tokenVerify(token)
    if(!!isVerified) next()
    else res.status(401).end("Token Expired")
}

module.exports = authorization