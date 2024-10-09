const mongoose = require("mongoose");

const PictureSchema = new mongoose.Schema({
    URL: String, 
    title: String, 
    alttext: String,
    user: String,
}, { timestamps: true });


const Picture = mongoose.model("Picture", PictureSchema);


module.exports = Picture;
