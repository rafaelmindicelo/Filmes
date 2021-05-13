const express = require("express");
const routes = express.Router();
const indexController = require("./controllers/indexController");
const contactController = require("./controllers/contactController");
const movieController = require("./controllers/movieController");

routes.get("/", indexController.index); //home
routes.get("/register", movieController.create); //cadastro de filmes
routes.post("/register", movieController.save); //cadastrando filme
routes.get("/movie/:id", movieController.show); //editar filme
routes.post("/movie/:id", movieController.update); //atualizando filme
routes.post("/movie/delete/:id", movieController.delete); //excluindo filme
routes.get("/movie/delete/:id", movieController.delete); //excluindo filme
routes.get("/movies", movieController.index); //filmes
routes.get("/contact", contactController.index); //contato

module.exports = routes;
