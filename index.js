const express = require('express')
const cors = require('cors')

const routes = require('./routes/router');
const app = express()

const port = 3400

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, () => {
    console.log(`Serving on http://localhost:${port}`)
})


