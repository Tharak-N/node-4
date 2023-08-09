var jwt = require('jsonwebtoken')

class Token {
    secretKey = "node.token.test"

    tokenVerify(token){
        let payload = jwt.verify(token, this.secretKey)
        return payload
    }
    
    generateToken(payload){
        const token = jwt.sign(
            payload,
            this.secretKey,
            { expiresIn: "2h"}
        )
        return token
    }
}

const auth = new Token()
module.exports = auth;
