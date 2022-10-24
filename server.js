const express = require("express")
const app = express()
//mongodb+srv://dbuser:dbuser@cluster0.3hyruhs.mongodb.net/?retryWrites=true&w=majority

app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))

app.listen(3000, function(){
console.log("Rodando no server 3000")
})
console.log("Bem vindo ao server")

app.get("/ler", (req, res) => {
res.send("Olá POVO DA ETE GP que adora JS")
})

app.get("/index", (req, res) => {
res.render("index.ejs")
})
app.post("/show", (req, res)=> {
    console.log("Meu post")
    res.send("Vai dar tudo certo")
})