const { SessionServices } = require("../services");

const sessionServices = new SessionServices();

class SessionsController {
  static async createSession(req, res) {
    try {
      const newSession = req.body;
      const result = await sessionServices.createRecord(newSession);

      res.status(200).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = SessionsController;
