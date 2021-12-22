const Restaurant = require("../models/restaurant.model");

const findAllRestaurants = (req, res) => {
  console.log("inside find all");
  Restaurant.find()
    .then((allRestaurants) => res.json({ allRestaurants }))
    .catch((err) => res.status(400).json(err));
};

const findOneSingleRestaurant = (req, res) => {
  console.log("inside findone");
  Restaurant.findOne({ _id: req.params.id })
    .then((oneSingleRestaurant) => res.json({ oneSingleRestaurant }))
    .catch((err) => res.status(400).json(err));
};

const createNewRestaurant = (req, res) => {
  console.log("inside create");
  console.log(res.body);
  Restaurant.create(req.body)
    .then((newlyCreatedRestaurant) => {
      console.log(newlyCreatedRestaurant);
      res.json(newlyCreatedRestaurant);
    })
    .catch((err) => res.status(400).json(err));
};

const updateExistingRestaurant = (req, res) => {
  console.log("inside update");
  Restaurant.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedRestaurant) => res.json({ updatedRestaurant }))
    .catch((err) => res.status(400).json(err));
};

const deleteAnExistingRestaurant = (req, res) => {
  console.log("inside delete ");
  Restaurant.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result }))
    .catch((err) => res.status(400).json(err));
};

const healthCheck = (req, res) => {
  res.json({ msg: "everything is set up" });
};

module.exports = {
  healthCheck,
  findAllRestaurants,
  findOneSingleRestaurant,
  createNewRestaurant,
  updateExistingRestaurant,
  deleteAnExistingRestaurant,
};
