const PORT = 3000;
import express from "express"
import { appendFile } from "fs";
import path from "path";

const app = express();

app.set("view engine", "ejs")

app.use("/public", express.static("public"));
app.use("/css", express.static(path.dirname + "public/css/"))
app.use("/js", express.static(path.dirname + "public/js/"))
app.use("/img", express.static(path.dirname + "public/img/"))


app.get("/", (req,res)=>{
    res.render("index.ejs")
})


app.listen(process.env.PORT || PORT, console.log(`app listening on port http://localhost:${PORT}`))