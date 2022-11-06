const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const vertifyToken = require('./controller/auth')

require("dotenv").config();

app.use(cors('*')); // To allow any origin
const port = process.env.PORT;

const userRoute = require('./routes/user')
const statusRoute = require('./routes/status')
const projectRoute = require('./routes/project')
const taskRoute = require('./routes/task')
const userProjectRoute = require('./routes/userProject')
const userTaskRoute = require('./routes/userTask')
const commentRtoute = require('./routes/comment')
const authRoute = require('./routes/auth')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/auth', authRoute)
app.use('/user', vertifyToken, userRoute)
app.use('/status', statusRoute)
app.use('/project', projectRoute)
app.use('/task', taskRoute)
app.use('/userProject', userProjectRoute)
app.use('/userTask', userTaskRoute)
app.use('/comment', commentRtoute)
app.listen(port, () => {
  console.log(`server starts at http://localhost:${port}`);
});
