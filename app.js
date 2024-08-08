const express = require("express");
require("dotenv").config();
const connection = require("./config/db");

const app = express();
const port = process.env.PORT;
connection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res, next) => {
  try {
    console.log("BIENVCENU");
    return res
      .status(200)
      .send("BIENVENU DANS NOTRE APPLOCATION D'ENREGISTREMENT DES CHAISES");
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "ERRUR DE SERVEUR" });
  }
});

app.listen(port, () => {
  console.log(`My server is running on http://localhost:${port}`);
});
