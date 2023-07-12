const express = require("express");
const app = express();
const routes=require('./routes/router.js')
const cors=require('cors')


const port = 3000;

const db = require("./config/database");
const Client = require("./models/client.js");
app.use(cors({
  origin:"http://localhost:5173"
}))
app.use(express.json());
const initApp = async () => {
  console.log("Testing the database connection..");

  try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
    // { alter: true }
    await Client.sync();
    app.use('/',routes)
    app.listen(port, () => {
      console.log(`Server is running at: http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

initApp();
