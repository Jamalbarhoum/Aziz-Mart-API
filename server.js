const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./models/db");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





