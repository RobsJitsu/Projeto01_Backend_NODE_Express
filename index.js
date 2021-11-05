const express = require("express");

const app = express(); 

const port = 3000;

app.use(express.json()); 
app.use(express.urlencoded({extended:true}))

const filmesRouter = require("./filmes"); 
app.use("/filmes",filmesRouter); 

const gamesRouter = require("./games");
app.use("/games",gamesRouter);

const musicasRouter = require("./musicas");
app.use("/musicas",musicasRouter);

app.listen(port, () => {
    console.info(`App rodando em: http://localhost:${port}`);
});
