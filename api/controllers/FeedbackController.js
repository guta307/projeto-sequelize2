const { FeedbackServices } = require("../services");

const feedbackServices = new FeedbackServices();

class FeedbackController {
  static async createFeedback(req, res) {
    try {
      const newFeedback = req.body;
      console.log(newFeedback);
      const result = await feedbackServices.createRecord(newFeedback);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = FeedbackController;
