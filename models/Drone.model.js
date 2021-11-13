// Iteration #1

const mongoose = require("mongoose")

const Drone = new mongoose.Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
})

const DroneModel = mongoose.model("Drone", Drone) 

module.exports = DroneModel