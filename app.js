const express = require("express");
const path = require("path");

const indexRouter = require("./app_server/routes/index");

const app = express();

// views + view engine
app.set("views", path.join(__dirname, "app_server", "views"));
app.set("view engine", "hbs");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// serve static files from your existing folders
app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/images", express.static(path.join(__dirname, "images")));

// routes
app.use("/", indexRouter);

// start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
