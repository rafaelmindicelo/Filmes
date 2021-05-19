const express = require("express");
const routes = express.Router();
const indexController = require("./controllers/indexController");
const contactController = require("./controllers/contactController");
const movieController = require("./controllers/movieController");

routes.get("/", indexController.index);
routes.get("/register", movieController.create);
routes.post("/register", movieController.save);
routes.get("/movie/:id", movieController.show);
routes.post("/movie/:id", movieController.update);
routes.post("/movie/delete/:id", movieController.delete);
routes.get("/movie/delete/:id", movieController.delete);
routes.get("/movies", movieController.index);
routes.get("/contact", contactController.index); 

module.exports = routes;
