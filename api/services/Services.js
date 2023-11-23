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

  async listRecords() {
    try {
      const result = await database[this.moduleName].findAll();
      console.log(result);
      return result;
    } catch (error) {
      console.error("Erro na listagem:", error);
      throw error; // Repassando o erro para ser tratado por quem chama a função
    }
  }

  async getOneRecord(id) {
    try {
      const result = await database[this.moduleName].findByPk(id);
      console.log(result);
      return result;
    } catch (error) {
      console.error("Erro na listagem:", error);
      throw error; // Repassando o erro para ser tratado por quem chama a função
    }
  }
  async updateRecord(newInfo, id) {
    try {
      await database.sequelize.transaction(async (t) => {
        await database[this.moduleName].update(newInfo, {
          where: {
            id: Number(id),
          },
          transaction: t,
        });
      });

      const result = await database[this.moduleName].findByPk(id);

      return result;
    } catch (error) {
      console.error("Erro no processo de atualização:", error);
      throw error; // Repassando o erro para ser tratado por quem chama a função
    }
  }

  async deleteRecord(id) {
    try {
      await database.sequelize.transaction(async (t) => {
        await database[this.moduleName].destroy({
          where: {
            id: Number(id),
          },
          transaction: t,
        });
      });
      return { message: `id ${id} foi deletado` };
    } catch (error) {
      console.error("Erro no processo de exclusão:", error);
      throw error; // Repassando o erro para ser tratado por quem chama a função
    }
  }

  async restoreRecord(id) {
    try {
      await database.sequelize.transaction(async (t) => {
        await database[this.moduleName].restore({
          where: {
            id: Number(id),
          },
          transaction: t,
        });
      });
      return { message: `id ${id} foi restaurado` };
    } catch (error) {
      console.error("Erro no processo de exclusão:", error);
      throw error; // Repassando o erro para ser tratado por quem chama a função
    }
  }
}

module.exports = Services;
