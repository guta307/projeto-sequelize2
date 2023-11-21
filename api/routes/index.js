const bodyParser = require("body-parser");
const people = require("./people");
const event = require("./events");
const session = require("./sessions");
module.exports = (app) => {
  app.use(bodyParser.json()); // indica para o express que terá uma  biblioteca que fará o "meio de campo" entre as requisições e o express
  app.use(people, event, session);
  app.get("/", (req, res) => res.status(200).send("Olá"));
};
