const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const multer  = require('multer')

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
const upload = multer({ dest: 'uploads/' })

app.use(express.urlencoder({extended:false}));

app.use(express.json());

app.get("/", (req, res) => {
    res.render("homepage");
});

app.post("/upload",upload.single("profileImage"),(req,res)=>{
    console.log(req.body);
    console.log(req.file);

    return res.redirect("/");

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
