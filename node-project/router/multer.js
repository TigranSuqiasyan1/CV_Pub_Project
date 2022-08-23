const multer = require("multer");

const storageUser = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/user");
  },
  filename: function (req, file, cb) {
    let name = Date.now() + file.originalname;
    cb(null, name);
  },
});

const storageProduct = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/product");
  },
  filename: function (req, file, cb) {
    let name = Date.now() + file.originalname;
    cb(null, name);
  },
});


const storageEvent = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/event");
  },
  filename: function (req, file, cb) {
    let name = Date.now() + file.originalname;
    cb(null, name);
  },
});

const storageCategory = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/category");
  },
  filename: function (req, file, cb) {
    let name = Date.now() + file.originalname;
    cb(null, name);
  },
});
const storageDancer = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/dancer");
  },
  filename: function (req, file, cb) {
    let name = Date.now() + file.originalname;
    cb(null, name);
  },
});

const uploadUser = multer({ storage: storageUser });
const uploadProduct = multer({ storage: storageProduct });
const uploadCategory = multer({ storage: storageCategory });
const uploadEvent = multer({ storage: storageEvent });
const uploadDancer = multer({ storage: storageDancer });

module.exports = {uploadUser, uploadProduct, uploadEvent, uploadCategory,uploadDancer}