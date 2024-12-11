const express = require("express");
const app = express();
const port = 5000;
const web = require("./routes/web");
const connectDb = require("./database/connectDb");

//parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

//connect database
connectDb();

// CSS JS link
app.use(express.static("public"));

//view ejs set
app.set("view engine", "ejs");

//route load
app.use("/", web);
// server create
app.listen(port, () => {
  console.log(`server start localhost:${port}`);
});
