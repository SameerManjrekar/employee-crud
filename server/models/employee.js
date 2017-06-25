const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    dob: { type: Date },
    city: { type: String, required: true },
    userType: { type: String, required: true },
    userStatus: { type: String, required: true }
});

module.exports = mongoose.model('Employee', employeeSchema);