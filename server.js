"use strict";

const express = require("express");
const routes = require("./routes/routes.js");

const app = express();
require("dotenv").load();

app.use("/public", express.static(process.cwd() + "/public"));
app.use("/dist", express.static(process.cwd() + "/dist"));
app.use("/assets", express.static(process.cwd() + "/public/assets"));

routes(app);

app.listen(process.env.PORT || 8080);
