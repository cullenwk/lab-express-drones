const DroneModel = require('../models/Drone.model');

const express = require('express');

const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
  .then((drones) => {
    res.render("drone/list.hbs" ,{drones})
  })
  .catch((error) => {
    next(error)
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  console.log(req.body)
    const {name, propellers, maxSpeed} = req.body

    DroneModel.create({name, propellers, maxSpeed})
        .then(() => {
          //redirect the user to home page

         // redirects it to a certain url path
        res.redirect('/drones')
       })
        .catch(() => {
          next('Drone creation was not successful')
       })
});


router.get('/drones/:droneId/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {droneId} = req.params

    DroneModel.findById(droneId)
        .then((drone) => {
            //render some HBS file with that drone information
            res.render('drones/update-form.hbs', {drone})
        })
        .catch(() => {
            next('Single drone fetch failed')
        })
});

router.get('/drones/:droneId/edit', (req, res, next) => {
  const {droneId} = req.params

  DroneModel.findById(droneId)
      .then((drone) => {
          //render some HBS file with that drone information
          res.render('drones/update-form.hbs', {drone})
      })
      .catch(() => {
          next('Single drone fetch failed')
      })

})


router.post('/drones/:droneId/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {name, propellers, maxSpeed} = req.body

  const {droneId} = req.params

    DroneModel.ffindByIdAndUpdate(droneId, {name, propellers, maxSpeed})
        .then(() => {
            res.redirect('/drones')
        })
        .catch((drone) => {
          res.render('drones/update-form.hbs', {drone} )
        })

});

router.post('/drones/:droneId/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {droneId} = req.params 
    
   // Delete from the database
   DroneModel.findByIdAndDelete(droneId)
       .then(() => {
           //then send the user to the home page
           res.redirect('/')
       })
       .catch(() => {
           next('Drone delete failed')
       })
});


module.exports = router;
