const { Router } = require("express");
const SessionsController = require("../controllers/SessionsController");

const router = Router();

router.post("/v1CreateSession", SessionsController.createSession);

module.exports = router;
