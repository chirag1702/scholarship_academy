const express = require('express')
const bodyparser = require('body-parser')
const { urlencoded } = require('body-parser')
const cors = require('cors')
const router = express.Router()
const saveUserLogin = require('./API/saveuserlogin')

router.use(express.json())
router.use(bodyparser.urlencoded({ extended: true }))

router.get('/', (req, res) => {
    console.log("api accessed!!")
    res.send("Hello From Routes")
})

router.post("/saveuserlogin", (req, res) => {
    var mno = req.body.mobile
    var mail = req.body.email
    var name = req.body.name
    var success = saveUserLogin.save(mno, mail, name)
    console.log(success)
    if (success) {
        res.send("Success")
    } else {
        res.send("failure")
    }
})


module.exports = router