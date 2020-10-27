const constants = require('../constants.js')
const models = require('../models')

function save(mobileNumber, email, name) {
    var userLogin = new models.userLogin({
        name: name,
        email: email,
        phoneNumber: mobileNumber
    })

    userLogin.save((err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log("data saved!!")
        }
    })
}

const exportData = {
    "save": save
}

module.exports = exportData