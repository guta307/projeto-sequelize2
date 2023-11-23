const { Router } = require("express");
const FeedbackController = require("../controllers/FeedbackController");
const router = Router();

router.post("/v1CreateFeedback", FeedbackController.createFeedback);

module.exports = router;
