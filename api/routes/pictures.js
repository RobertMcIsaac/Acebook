const express = require("express");
const router = express.Router();
const tokenChecker = require("../middleware/tokenChecker")

const PicturesController = require('../controllers/pictures');

router.get('/', PicturesController.getAllPictures);
router.post('/', PicturesController.createPicture);

module.exports = router;