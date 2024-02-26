//servidor tipo requisição get rest no servidor local
const express = require('express')//este codigo importa o express
const app = express()//instansia do express do modulo em uma contante app
const port = 3000 //definição da porta

//criar rota padão ou raiz
app.get('/',(req,res) => {
    res.send('Curso de node Js')//Resposta

})//app.get que significa que vai fazer uma requisição o '/' que significa raiz
//calbak função passa dois paramentros
//escutar a porta 3000
app.listen(port, () => {
    console.log(`Sevidor rodando no endereço http://localhost:${port}`)
  })

