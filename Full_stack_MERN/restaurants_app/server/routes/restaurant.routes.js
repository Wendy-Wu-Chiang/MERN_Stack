const RestaurantController = require("../controllers/restaurant.controller");

module.exports = (app) => {
  app.get("/", RestaurantController.healthCheck);
  app.get("/api/restaurant", RestaurantController.findAllRestaurants);
  app.post("/api/restaurant", RestaurantController.createNewRestaurant);
  app.get("/api/restaurant/:id", RestaurantController.findOneSingleRestaurant);
  app.put("/api/restaurant/:id", RestaurantController.updateExistingRestaurant);
  app.delete(
    "/api/restaurant/:id",
    RestaurantController.deleteAnExistingRestaurant
  );
};
