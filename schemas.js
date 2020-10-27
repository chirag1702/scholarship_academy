const mongoose = require('mongoose')
const schema = mongoose.Schema

const users_login_schema = new schema({
    name: String,
    email: String,
    phone_number: String,
})

const my_courses_schema = new schema({
    user_id: String,
    course_name: String,
    description: String,
})

const course_videos_schema = new schema({
    user_id: String,
    course_id: String,
    video_name: String,
    video_url: String,
})

const users_about_info = new schema({
    full_name: String,
    date_of_birth: String,
    tenth_percentage: String,
    twelth_percentage: String,
    ug_percentage: String,
    highest_qualification: String,
    looking_for: String,
    course_to_study: String,
    pincode: String,
    tenth_marksheet: String,
    twelth_marksheet: String,
    ug_marksheet: String,
    gre_scorecard: String,
    gmat_scorecard: String,
    ielts_scorecard: String,
    other_document: String,
})

const SCHEMAS = {
    "usersLoginSchema": users_login_schema,
    "myCoursesSchema": my_courses_schema,
    "courseVideosSchema": course_videos_schema,
    "usersAboutInfoSchema": users_about_info,
}

module.exports = SCHEMAS
