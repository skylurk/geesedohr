const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creating Schema and Model

//Schema
const EmployeeSchema = new Schema({
    name: String,
    age: Number
});

//Model
const Employee = mongoose.model('employee', EmployeeSchema);

module.exports = Employee;