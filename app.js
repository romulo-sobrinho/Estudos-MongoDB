const express = require('express')
const PORT = 3000
const app = express()
const mongoose = require('mongoose')

// const linksSchema = new mongoose.Schema({
//   click: {type: Number, default: 0},
//   title: {type: String, required: true},
//   description: String,
//   url: String
// })

//Schema para o db blog
const postsSchema = new mongoose.Schema({
  like: {type: Number, default: 0},
  title: {type: String, required: true},
  description: String,
})

//Coleção posts para o blog
const Post = mongoose.model('Post', postsSchema)

//Criação do documento conforme a partir da coleção
let post = new Post({
  title: "Aviso aos professores",
  description: "Atualizem as notas dos alunos até 25/07/2022"
})

//Salvando o documento na base de dados
post.save()
.then( document => {
  console.log(`Documento salvo com sucesso: ${document}`)
})
.catch( error => {
  console.log(`Houve um erro ao tentar salvar o documento: ${error}`)
})

// const Link = mongoose.model('Link', linksSchema)

// let link = new Link({
//   title: "ProgamadorBR",
//   description: "Link para acesso ao twitter programador br",
//   url: "https://twitter.com/progrbr"
// })

// link.save().then(document => {
//   console.log(document)
// }).catch(error => {
//   console.log(error)
// })

// mongoose.connect('mongodb://localhost/links').then(db => {
//   console.log("Banco de dados conectado")
//   app.get('/:title', async (req, res) => {
//     let title = req.params.title
//     try {
//       let doc = await Link.findOne({title})
//       console.log(doc.url)
//       console.log(doc.id)
//       console.log(doc.title)
//       res.redirect(doc.url)
//     } catch (err) {
//       res.send(error)
//     }
//   })
// }).catch(error => {
//   console.log("Houve um erro ao conectar o banco de dados")
// })

// 1ª Maneira - utilizando callback
// mongoose.connect('mongodb://localhost/blog', (error, db) => {
//   if (error) {
//     console.log("Ocorreu um erro ao conectar o banco de dados", error)
//   } else {
//     console.log("Banco conectado com sucesso", db)
//   }
// })

// 2ª Maneira - utilizando promise
mongoose.connect('mongodb://localhost/blog').then(db => {
  console.log("Banco conectado com sucesso", db)
}).catch(error => {
  console.log("Ocorreu um erro ao conectar o banco de dados", error)
})

// 3ª Maneira - utilizando variáveis de evento
// mongoose.connect('mongodb://localhost/blog')
// let db = mongoose.connection

// db.on('error', () => {
//   console.log("Ocorreu um erro ao conectar o banco de dados", error)
// })

// db.once('open', () => {
//   console.log("Banco conectado com sucesso", db)
// })

app.get('/', (req, res) => {
  res.send("Hello World")
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})