//console.log("eeeeeee");

// import chalk
//import chalk from 'chalk';
//console.log(chalk.blue('Hello world!'));

const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

// require routes
const messagesRouter = require('./routes/api/v1/messages');


// require logger
//const logger = require('./middleware/logger');

// json body parser
app.use(express.json());
app.use(cors());
app.use("/api/v1/messages", messagesRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})