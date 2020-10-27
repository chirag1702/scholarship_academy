const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/scholarship", { useNewUrlParser: true, useUnifiedTopology: true }).then(console.log("connected!!"))

const CONSTANTS = {
    "mongoose": mongoose
}

module.exports = mongoose