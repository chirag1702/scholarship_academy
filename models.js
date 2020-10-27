const mongoose = require('mongoose')
const schemas = require('./schemas')
const model = mongoose.model

const userLogin = model("users_login", schemas.usersLoginSchema)
const myCourses = model("user_courses", schemas.myCoursesSchema)
const courseVideos = model("user_course_videos", schemas.courseVideosSchema)

const MODELS = {
    "userLogin": userLogin,
    "myCourses": myCourses,
    "courseVideos": courseVideos,
}

module.exports = MODELS