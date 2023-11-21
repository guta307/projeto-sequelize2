const database = require("../models");

class Services {
  constructor(moduleName) {
    this.moduleName = moduleName;
  }

  async createRecord(data) {
    try {
      const result = await database.sequelize.transaction(async (t) => {
        return await database[this.moduleName].create(data, { transaction: t });
      });
      return result; // Se tudo correr bem, retorne o resultado
    } catch (error) {
      console.error("Erro na criação do registro:", error);
      throw error; // Repassando o erro para ser tratado por quem chama a função
    }
  }
}

module.exports = Services;
