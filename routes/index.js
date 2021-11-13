const express = require("express");
const router = express.Router();
const DroneModel = require('../models/Drone.model')

/* GET home page */
router.get("/", (req, res, next) => {
    
    DroneModel.find()
     .then((drones) => {
        res.render("index", {drones});
     })
    .catch(() => {
        next('Drones could not find') 
     })
    
    

});

module.exports = router;
