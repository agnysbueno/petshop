const express = require("express");
const app = express();
const Router = express.Router();
const PetController = require("../controller/Petcontroller");

Router.get("/", PetController.index);
Router.get("/add/:nome", PetController.add);
Router.get("/show/:nome", PetController.show);
module.exports = Router;