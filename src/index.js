const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()


const routes = require('./routes')

const app = express()


mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => console.log("Conectado ao banco de dados"))

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(express.static(__dirname + '/public'))

app.listen(3000, () => console.log("Servidor rodando!!!"))