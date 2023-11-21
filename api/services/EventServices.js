const Services = require("./Services");

const database = require("../models");

class EventServices extends Services {
  constructor() {
    super("Events");
  }
}

module.exports = EventServices;
