const Services = require("./Services");

const database = require("../models");

class PeopleServices extends Services {
  constructor() {
    super("People");
  }

  async getAllHosts() {
    try {
      const result = await database[this.moduleName].scope("hosts").findAll();
      console.log(result);
      return result;
    } catch (error) {
      console.error("Erro na listagem:", error);
      throw error; // Repassando o erro para ser tratado por quem chama a função
    }
  }

  async getAllParticipants() {
    try {
      const result = await database[this.moduleName]
        .scope("participants")
        .findAll();
      console.log(result);
      return result;
    } catch (error) {
      console.error("Erro na listagem:", error);
      throw error; // Repassando o erro para ser tratado por quem chama a função
    }
  }
}

module.exports = PeopleServices;
