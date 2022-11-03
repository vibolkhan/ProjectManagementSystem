const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

app.use(cors('*')); // To allow any origin
const port = process.env.PORT;

const userRoute = require('./routes/user')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/user', userRoute)

app.listen(port, () => {
  console.log(`server starts at http://localhost:${port}`);
});