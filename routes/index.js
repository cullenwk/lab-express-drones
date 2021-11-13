const express = require("express");
const router = express.Router();
const DroneModel = require('../models/Drone.model')

/* GET home page */
router.get("/", (req, res, next) => {
    DroneModel.find()
    .then((drones) => {

      res.render("index.hbs", {drones});
    })
    .catch(() => {
      next('Drone find failed')
    })

});
    
    

module.exports = router;
