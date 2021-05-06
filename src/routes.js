const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => res.render("pages/index"));

routes.get("/cadastro", (req, res) => res.render("pages/cadastro"));

routes.get("/contato", (req, res) => res.render("pages/contato"));

routes.get("/filmes", (req, res) => res.render("pages/filmes"))

module.exports = routes;
