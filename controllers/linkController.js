const Link = require('../models/Link')

const redirect = async (req, res) => {
  let title = req.params.title
  try {
    let document = await Link.findOne({title})
    console.log(document)
    res.redirect(document.url)
  }
  catch (error) {
    console.log(`Houve um erro ao buscar os dados ${error}`)
  }
}

module.exports = {redirect}