const constants = require('../constants.js')
const models = require('../models')

function save(mobileNumber, email, name) {

    var userLogin = new models.userLogin({
        name: name,
        email: email,
        phone_number: mobileNumber
    })

    userLogin.save((err, result) => {
        if (err) {
            console.log(err)
        } else {
            console.log(result)
        }
    })
}

const exportData = {
    "save": save
}

module.exports = exportData