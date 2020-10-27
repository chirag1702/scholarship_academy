const phoneValid = function phoneValid(phoneNumber) {
    if (phoneNumber.length === 10) {
        return true
    } else {
        return false
    }
}

const functions = {
    "validPhoneNumber": phoneValid,
}

module.exports = functions