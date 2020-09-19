var express = require("express");
const { PDFNet } = require("@pdftron/pdfnet-node");
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

router.get("/pdftron", function (req, res, next) {
  console.log("hi");
  //const doc = await PDFNet.PDFDoc.createFromFilePath(filename);
  // let name = path.basename(name);
  // let url = `/pdf/${name}`;
  // const doc = await PDFNet.PDFDoc.createFromFilePath(url);
  //paths = fs.readdir(dirPath);

  console.log("path" + dirPath + "/" + "abc.pdf");
  //http://localhost:3000/pdf/abc.pdf
  // name = path.basename(name);
  urls = "http://localhost:3000/pdf/abc.pdf";
  // PDFNet.initialize();
  // urls = PDFNet.PDFDoc.createFromFilePath("http://localhost:3000/pdf/abc.pdf");
  const files = fs.readdirSync(dirPath).map((name) => {
    //   //console.log(dirPath);
    //   //console.log(path.basename(name, ".pdf"));
    //   // (name = path.basename(name)),
    //   //   (url = `/pdf/${name}`),
    //   //   console.log(`/pdf/${name}`);
    //   PDFNet.initialize();

    return {
      //     console.log(doc);
      //abcd: console.log(path.basename(name)),
      // name: path.basename(name),
      g: console.log("G" + urls),
      url: urls,
      // g: console.log(`/pdf/${name}`),
    };
  });
  res.render("pdftron", urls);

  //console.log(doc);
  // optionally read a PDF document from a stream
  //const file = PDFNet.Filter.createMappedFileFromUString("./pdf/abc.pdf");
  // const doc_stream = PDFNet.PDFDoc.createFromFilter(file);
  // or pass-in a memory buffer
  // const file_sz = await file.mappedFileFileSize();
  // const file_reader = await PDFNet.FilterReader.create(file);
  // const mem = await file_reader.read(file_sz);
  // const doc_mem = await PDFNet.PDFDoc.createFromBuffer(mem);

  // // add your own license key as the second parameter, e.g. PDFNet.runWithCleanup(main, 'YOUR_LICENSE_KEY')
});
// you may need to set up NODE_PATH environment variable to make this work.

module.exports = router;
