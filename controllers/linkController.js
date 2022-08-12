const Link = require('../models/Link')

const redirect = async (req, res) => {
  let title = req.params.title
  try {
    let document = await Link.findOne({title})
    res.redirect(document.url)
  }
  catch (error) {
    console.log(`Houve um erro ao buscar os dados ${error}`)
  }
}

const addLink = async (req, res) => {
  const {title, description, url} = req.body

  let link = new Link ({
    title,
    description,
    url
  })

  try {
    await link.save()
    res.status(201).json({message: 'Link adicionado com sucesso'})
  }
  catch (error) {
    res.render('index', { error, body: req.body })
  }
}

const showLinks = async (req, res) => {
  try {
    let links = await Link.find({})
    res.render('allLinks', { links: links })//A primeira variável é o nome da variável que está lá no template
  }
  catch (error) {
    res.status(500).json({message: `Houve um erro ao buscar os dados ${error}`})
  }
}

const deleteLink = async (req, res) => {
  const id = req.params.id

  if(!id) {
    id = req.body.id
  }

  const link = Link.findOne({_id: id})

  if(!link) {
    res.status(422).json({message: 'Link não encontrado, tente novamente com outro ID'})
    return
  }

  try {
    await Link.findByIdAndDelete(id)
    res.send(id)
  }catch (error) {
    res.status(500).json({message: `Houve um erro ao deletar o link`})
  }
}


module.exports = {redirect, addLink, showLinks, deleteLink}