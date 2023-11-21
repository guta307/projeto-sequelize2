const { Router } = require("express");

const PeopleControllers = require("../controllers/PeopleController");

const router = Router();

router.post("/v1CreateUser", PeopleControllers.createPeople);

module.exports = router;
