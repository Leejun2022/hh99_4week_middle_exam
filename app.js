const express = require('express');
const Http = require('http');
const routes = require('./routes');
require('dotenv').config();

const router = express.Router();

const cookieParser = require('cookie-parser');



const app = express();
const http = Http.createServer(app);
const port = process.env.EXPRESS_PORT || 3000;

app.use(cookieParser())

const signupRouter = require("./routes/signup");
const postsRouter = require("./routes/posts");
const loginRouter = require("./routes/login");
const likesRouter = require("./routes/likes");
const commentsRouter = require("./routes/comments");

app.use(express.urlencoded({ extended: false }), router);

app.use(express.json());
app.use([signupRouter, postsRouter, loginRouter, likesRouter, commentsRouter]);
router.get("/", (req, res) => {
  res.send({});
});
http.listen(port, () => {
  console.log(`Start listen Server: ${port}`);
});

module.exports = http;
