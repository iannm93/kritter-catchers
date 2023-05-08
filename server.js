const PORT = 3001;

const express = require("express")

const http = require("http")
const path = require("path")

const app = express();

// app.set("view engine", "ejs");

app.use(express.static(__dirname+ "/public/"))
// app.use("/css", express.static(path.dirname + "public/css/"));
// app.use("/js", express.static(path.dirname + "public/js/"));
// app.use("/img", express.static(path.dirname + "public/img/"));

app.get("/", (req, res) => {
  res.render("index.html");
});



http.createServer(app).listen(process.env.PORT || PORT, console.log(` listening on port http://localhost:${PORT}`));