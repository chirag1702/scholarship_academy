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

const SCHEMAS = {
    "usersLoginSchema": users_login_schema,
    "myCoursesSchema": my_courses_schema,
    "courseVideosSchema": course_videos_schema,
}

module.exports = SCHEMAS
