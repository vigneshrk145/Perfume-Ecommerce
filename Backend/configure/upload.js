const multer = require("multer");
 
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
    ];
    if (!allowedMimeTypes.includes(file.mimetype)) {
      return cb(
        new Error(
          "Invalid file type. Only JPEG, JPG, PNG, WEBP  are allowed."
        )
      );
    }
    cb(null, true);
  },
  limits: { fileSize: 100 * 1024 * 1024 },
});
 
module.exports = upload;
 