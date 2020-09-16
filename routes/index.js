var express = require("express");
var router = express.Router();
var fs = require("fs");
var path = require("path");
//const dirPath = "./public/pdf";
const dirPath = path.join("public/pdf");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/pdf", function (req, res, next) {
  console.log("hi");

  const files = fs.readdirSync(dirPath).map((name) => {
    //console.log(dirPath);
    //console.log(path.basename(name, ".pdf"));
    // (name = path.basename(name)),
    //   (url = `/pdf/${name}`),
    //   console.log(`/pdf/${name}`);
    return {
      abcd: console.log(path.basename(name)),
      name: path.basename(name),
      url: `/pdf/${name}`,
      g: console.log(`/pdf/${name}`),
    };
  });
  res.render("pdfviewer", { files });
  //   var data = fs.readFileSync("./public/pdf/abc.pdf");
  //   res.contentType("application/pdf");
  //   res.send(data);
});

router.get("/ann", function (req, res, next) {
  const files = fs.readdirSync(dirPath).map((name) => {
    //console.log(dirPath);
    //console.log(path.basename(name, ".pdf"));
    // (name = path.basename(name)),
    //   (url = `/pdf/${name}`),
    //   console.log(`/pdf/${name}`);
    return {
      abcd: console.log(path.basename(name)),
      name: path.basename(name),
      url: `/pdf/${name}`,
      g: console.log(`/pdf/${name}`),
    };
  });
  res.render("veiwerAnn", { files });
});

router.get("/write", function (req, res, next) {
  res.render("writing", { files });
});

module.exports = router;
