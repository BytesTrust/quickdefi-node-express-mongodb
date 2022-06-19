const dbConfig = require("../config/DbConfig.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.users = require("./UserModel.js")(mongoose);

module.exports = db;
