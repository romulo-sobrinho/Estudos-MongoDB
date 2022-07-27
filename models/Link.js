const mongoose = require('mongoose')

const linksSchema = new mongoose.Schema({
  click: {type: Number, default: 0},
  title: {type: String, required: true},
  description: String,
  url: String
})

module.exports = mongoose.model('Link', linksSchema)