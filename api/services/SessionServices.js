const Services = require("./Services");

const database = require("../models");

class Session extends Services {
  constructor() {
    super("Sessions");
  }
}

module.exports = Session;
