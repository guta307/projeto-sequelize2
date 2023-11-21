const Services = require("./Services");

const database = require("../models");

class PeopleServices extends Services {
  constructor() {
    super("People");
  }
}

module.exports = PeopleServices;
