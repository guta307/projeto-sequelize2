const { Router } = require("express");

const EventController = require("../controllers/EventController");

const router = Router();

router.post("/v1CreateEvent", EventController.createEvent);

module.exports = router;
