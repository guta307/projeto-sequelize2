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
      res.status(500).json(e);
    }
  }
  static async listPeople(req, res) {
    try {
      const result = await peopleServices.listRecords();
      console.log(result);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async listHosts(req, res) {
    try {
      const result = await peopleServices.getAllHosts();
      console.log(result);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async listParticipants(req, res) {
    try {
      const result = await peopleServices.getAllParticipants();
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async updatePeople(req, res) {
    try {
      const { peopleId } = req.params;
      const newPeople = req.body;
      const result = await peopleServices.updateRecord(newPeople, peopleId);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async deletePeople(req, res) {
    try {
      const { peopleId } = req.params;
      const result = await peopleServices.deleteRecord(peopleId);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async restorePeople(req, res) {
    try {
      const { peopleId } = req.params;
      const result = await peopleServices.restoreRecord(peopleId);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  static async getFeedbackFromPeople(req, res) {
    try {
      const { peopleId } = req.params;
      const people = await peopleServices.getOneRecord(peopleId);
      const feedbacks = await people.getFeedbacks();
      res.status(200).json(feedbacks);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = peopleControllers;
