const express = require("express");
const multer = require("multer");
const app = express();

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/users");
    },
    filename: function (req, file, callBack) {
      callBack(null, `${Date.now() + file.originalname.split(" ").join("-")}`);
    },
  }),
}).single("users");

app.post("/post", upload, async (req, res) => {
  console.log(req.file);
  return res.send("File Uploaded");
});

app.listen(4000);
