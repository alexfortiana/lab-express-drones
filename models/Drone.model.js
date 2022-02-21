// Iteration #1
const mongoose = require("mongoose")
const dronSchema = new mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
})

const Dron = mongoose.model("Dron", dronSchema)
module.exports = Dron