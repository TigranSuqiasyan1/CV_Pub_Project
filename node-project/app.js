const express = require("express");
const { router } = require("./router/router");
const app = express();
const port = 8080;
const session = require("express-session");
const passport = require('passport')
const cors = require("cors")

app.use(cors({
  credentials:true,
  origin:"http://localhost:3000"
}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use(
  session({
    secret: "+",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/", router);

app.listen(port, () => console.log(port));

