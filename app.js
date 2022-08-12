const express = require('express')
const PORT = 3000
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const linkRoute = require('./routes/linkRoute')
const path = require('path');

//Conectando ao banco de dados
mongoose.connect('mongodb://localhost/linkPost').then(db => {
  console.log("Banco conectado com sucesso")
}).catch(error => {
  console.log(`Ocorreu um erro ao conectar o banco de dados ${error}`)
})

app.set('view engine', 'ejs') //definindo qual o template engine que será usado, no caso EJS
app.set('views', path.join(__dirname, 'templates')) // aqui está dizendo que as views do ejs serão setadas na pasta templates

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use('/', linkRoute)

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})


// let link = new Link({
//   title: "Twitter",
//   description: "Link para acesso ao twitter programador br",
//   url: "https://twitter.com/progrbr"
// })

// link.save().then(document => {
//   console.log(document)
// }).catch(error => {
//   console.log(error)
// })


//CONEXÕES***************************************************************************************

// 1ª Maneira - utilizando callback
// mongoose.connect('mongodb://localhost/blog', (error, db) => {
//   if (error) {
//     console.log("Ocorreu um erro ao conectar o banco de dados", error)
//   } else {
//     console.log("Banco conectado com sucesso", db)
//   }
// })

// 2ª Maneira - utilizando promise
// mongoose.connect('mongodb://localhost/blog').then(db => {
//   console.log("Banco conectado com sucesso", db)
// }).catch(error => {
//   console.log("Ocorreu um erro ao conectar o banco de dados", error)
// })

// 3ª Maneira - utilizando variáveis de evento
// mongoose.connect('mongodb://localhost/blog')
// let db = mongoose.connection

// db.on('error', () => {
//   console.log("Ocorreu um erro ao conectar o banco de dados", error)
// })

// db.once('open', () => {
//   console.log("Banco conectado com sucesso", db)
// })




//BLOG***************************************************************************************

//Schema para o db blog
// const postsSchema = new mongoose.Schema({
//   like: {type: Number, default: 0},
//   title: {type: String, required: true},
//   description: String,
// })

//Coleção posts para o blog
// const Post = mongoose.model('Post', postsSchema)

//Criação do documento conforme a partir da coleção
// let post = new Post({
//   title: "Aviso aos Alunos",
//   description: "As notas dos alunos serão divulgadas dia 26/07/2022"
// })

//Salvando o documento na base de dados
// post.save()
// .then( document => {
//   console.log(`Documento salvo com sucesso: ${document}`)
// })
// .catch( error => {
//   console.log(`Houve um erro ao tentar salvar o documento: ${error}`)
// })