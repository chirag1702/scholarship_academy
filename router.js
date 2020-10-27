const express = require('express')
const bodyparser = require('body-parser')
const { urlencoded } = require('body-parser')
const router = express.Router()
const saveUserLogin = require('./API/saveuserlogin')

router.use(express.json())

router.get('/', (req, res) => {
    console.log("api accessed!!")
    res.send("Hello From Routes")
})

router.get("/saveuserlogin", (req, res) => {
    saveUserLogin.save("6375528478", "email", "chirag")
})


module.exports = router