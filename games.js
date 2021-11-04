const express = require("express");
const router = express.Router(); 

let listaGames = [];

router.get("/", (req,res) => {
    res.status(200).json({message:"games ok"})
    })

router.get("/listar", (req,res) => {
    res.status(200).json(listaGames);
});

router.get("/listar/:nome", (req,res) => {
  const nome = req.params.nome;
  const games = listaGames.find((item) => 
  item.nome === nome);
  res.status(200).json(games);
});

router.get("/listarindex/:nome", (req,res) => {
    const nome = req.params.nome;
    const index = listaFilmes.findIndex((item) => 
    item.nome === nome);

    if(index == -1){
        res.status(204);
        return;
    }
    res.status(200).json({index:index});
});

router.post("/", (req,res) => {
    const games = req.body;

    listaGames.push(games); 
    
    res.status(201).json({message:"cadastrado com sucesso"} (listaGames));
});

router.put("/:id", (req,res) => {
    const id = req.params.id;
    const games = listaGames[id];
    
    console.log(games);
    
    listaGames[id] = req.body;

    res.status(200).json(listaGames[id]);
});

router.delete("/:id", (req,res) => {
    const id = req.params.id;
    delete listaGames[id];

    console.log(listaGames[id]);
    
    res.status(200).json(listaGames);
});

router.delete("/deletar/:id", (req,res) => {
    const id = req.params.id;

    listaFilmes.splice(id,1);
    
    res.json(listaGames);
});

module.exports = router; 