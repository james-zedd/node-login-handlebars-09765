const express = require("express");
const exphbs = require("express-handlebars");
const port = process.env.PORT || 5000;

const app = express();

/**
 * Middleware
 */
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    defaultView: "default",
    layoutsDir: __dirname + "/views/layouts/",
    partialsDir: __dirname + "/views/partials/",
  })
);
app.set("view engine", "hbs");

/**
 * Routes
 */
app.use("/", require("./routes/index"));
app.use("/login", require("./routes/login"));

/**
 * Server
 */
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
