const { PeopleServices } = require("../services");
const peopleServices = new PeopleServices();

class peopleControllers {
  static async createPeople(req, res) {
    try {
      const newPeople = req.body;
      console.log(newPeople);
      const result = await peopleServices.createRecord(newPeople);
      res.status(200).json(result);
    } catch (e) {
      res.status(200).json(e);
    }
  }
}

module.exports = peopleControllers;
