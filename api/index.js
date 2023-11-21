const express = require("express");
const routes = require("./routes");

const app = express();
const port = 3005;

routes(app);

app.listen(port, () => {
  console.log(`O server está rodando na porta ${port}`);
});
