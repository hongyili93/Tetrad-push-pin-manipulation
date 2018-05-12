var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('RenderedImage', new Schema({
	originalName: String,
	serializedCanvas: String,
	serializedLayer: String
}));