const Picture = require('../models/pictures');
const { generateToken } = require('../lib/token');

async function createPicture(req, res) {
    const picture = new Picture(req.body);
    picture.save();

    const newToken = generateToken(req.user_id);
    res.status(201).json({ message: "Picture posted", token: newToken});
}

async function getAllPictures(req, res) {
    const pictures = await Picture.find();
    const token = generateToken(req.user_id);
    res.status(200).json({pictures: pictures, token: token});
}

const PicturesController = {
    createPicture : createPicture,
    getAllPictures: getAllPictures
};

module.exports = PicturesController;