// SEEDING IS TO ENSURE OUR DB HAS SOME INITIAL DATA

// Iteration #1
// 1. MAKE THE DB CONNECTIONS
require('../db')
const mongoose = require('mongoose')

// 2. REQUIRE THE MODEL
let DroneModel = require('../models/Drone.model')

// 3. INSERT DATA IN THE MODEL
DroneModel.insertMany([
    {name:'General Atomics MQ-9 Reaper', propellers: 4, maxSpeed: 20},
    {name:'DJY Drone4', propellers: 4, maxSpeed: 25},
    {name:'Mini Handdrone Spider', propellers: 2, maxSpeed: 10},
])
    .then(() => {
        console.log('Data inserted')
        mongoose.connection.close()
    })
    .catch((err) => {
        console.log('Error', err)
        mongoose.connection.close()
    })

