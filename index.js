const express = require('express')
const cors = require('cors')
const router = require('./router')
const app = express()

app.use(cors())

app.get('/', router)
app.get('/saveuserlogin', router)

app.listen(8000, function() {
    console.log("Server running on port 8000")
})

module.exports = app