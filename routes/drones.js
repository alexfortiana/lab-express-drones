const express = require('express');
const router = express.Router();
const Dron = require("../models/Drone.model")

// require the Drone model here

router.get('/drones', (req, res, next) => {
  Dron.find()
  .then((response) => {
    console.log(response)
    res.render("drones/list.hbs", {response})
  })
  .catch((err) =>{
    next(err)
  })
  
});

router.get('/drones/create', (req, res, next) => {
  res.render("drones/create-form.hbs")
});

router.post('/drones/create', (req, res, next) => {
  console.log(req.body)
  const {name, propellers, maxSpeed} = req.body
  Dron.create({name, propellers, maxSpeed
  })
  .then((response) => {
    res.redirect("/drones")

  })
  .catch((err)=>{
    next(err)
  })
});

router.get('/drones/:id/edit', async(req, res, next) => {
  try{
    const {id} = req.params
    const updateDron = await Dron.findById(id)
    res.render("drones/update-form.hbs", {updateDron})

  }
  catch(err) {
    next(err)
  }

  
});

router.post('/drones/:id/edit', async(req, res, next) =>{
  try{
    const {name, propellers, maxSpeed} = req.body
    const {id} = req.params
    const pushDron = await Dron.findByIdAndUpdate( id,{
      name, propellers, maxSpeed
    })
    res.redirect("/drones")

  }
  catch(err){
    next(err)
  }

});

router.post('/drones/:id/delete', async(req, res, next) => { try{
  const {id} = req.params
  const deletedDron = await Dron.findByIdAndDelete(id)
  res.redirect("/drones")
}
catch(err) {
  next(err)
}
  
});

module.exports = router;
