const { EventServices } = require("../services");

const eventServices = new EventServices();

class EventController {
  static async createEvent(req, res) {
    try {
      const newEvent = req.body;
      const result = await eventServices.createRecord(newEvent);

      res.status(200).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = EventController;
