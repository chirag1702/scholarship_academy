const express = require('express')
const bodyparser = require('body-parser')
const { urlencoded } = require('body-parser')
const cors = require('cors')
const router = express.Router()
const saveUserLogin = require('./API/saveuserlogin')
const saveAboutUsers = require('./API/saveaboutusers')

router.use(express.json())
router.use(bodyparser.urlencoded({ extended: true }))

router.get('/', (req, res) => {
    console.log("api accessed!!")
    res.send("Hello From Routes")
})

router.post("/saveuserlogin", (req, res) => {
    var response
    var mno = req.body.mobile
    var mail = req.body.email
    var name = req.body.name
    saveUserLogin.save(mno, mail, name)
    response = {
        "success": true,
        "message": "details inserted"
    }

    res.send(response)
})

router.post("/saveaboutuser", (req, res) => {
    var response
    var fullName = req.body.fullname
    var dateOfBirth = req.body.dob
    var tenthPercentage = req.body.tenthp
    var twelthPercentage = req.body.twelthp
    var ugPercentage = req.body.ugp
    var highestQualification = req.body.highestqualification
    var lookingFor = req.body.lookingfor
    var courseToStudy = req.body.coursetostudy
    var pincode = req.body.zipcode
    var tenthMarkSheet = req.body.tenthmarksheet
    var twelthMarkSheet = req.body.twelthmarksheet
    var ugMarkSheet = req.body.ugmarksheet
    var greScoreCard = req.body.grescorecard
    var gmatScoreCard = req.body.gmatscorecard
    var ieltsScoreCard = req.body.ieltsscorecard
    var otherDocument = req.body.otherdocument
    saveAboutUsers.save(fullName, dateOfBirth, tenthPercentage, twelthPercentage, ugPercentage, highestQualification, lookingFor, courseToStudy, pincode, tenthMarkSheet, twelthMarkSheet, ugMarkSheet, greScoreCard, gmatScoreCard, ieltsScoreCard, otherDocument)

    response = {
        "success": true,
        "message": "details saved successfully"
    }

    res.send(response)
})


module.exports = router