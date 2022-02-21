// Iteration #1


const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

  const Dron = require("../models/Drone.model")

  const mongoose = require("mongoose")
  
  mongoose.connect("mongodb://localhost/lab-express-drones")
  .then((x) => {
      

    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    return Dron.insertMany(drones)
  })
  .then((response) =>{
       mongoose.connection.close()
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
