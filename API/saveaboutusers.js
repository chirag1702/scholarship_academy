const constants = require('../constants')
const models = require('../models')

function save(name, dob, tperc, twperc, ugperc, highqualification, lfor, course, pincode, tmark, twmark, ugmark, grecard, gmatcard, ieltscard, other) {
    var info = new models.aboutInfo({
        full_name: name,
        date_of_birth: dob,
        tenth_percentage: tperc,
        twelth_percentage: twperc,
        ug_percentage: ugperc,
        highest_qualification: highqualification,
        looking_for: lfor,
        course_to_study: course,
        pincode: pincode,
        tenth_marksheet: tmark,
        twelth_marksheet: twmark,
        ug_marksheet: ugmark,
        gre_scorecard: grecard,
        gmat_scorecard: gmatcard,
        ielts_scorecard: ieltscard,
        other_document: other
    })

    info.save((err, result) => {
        if (errr) {
            console.log(err)
        } else {
            console.log("data saved successfully!!")
        }
    })
}

const exportData = {
    "save": save
}

module.exports = exportData