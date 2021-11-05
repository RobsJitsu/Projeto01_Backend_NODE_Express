const express = require("express");
const router = express.Router(); 

let listaGames = [{
    nome:"teste"
}];

router.get("/", (req,res) => {
res.status(200).json({message:"games ok"})
console.log("deu certo");
})

router.get("/listar", (req,res) => {
    res.status(200).json(listaGames);
});

router.get("/listar/:id", (req,res) => {
    const id = req.params.id;
    const games = listaGames[id];
    res.status(200).json({games:games});
});

router.post("/add", (req,res) => {
    const games = req.body;
    listaGames.push(games); 
    res.status(201).json({message:"cadastrado com sucesso"});
});

router.put("/:id", (req,res) => {
    const id = req.params.id;
    const games = listaGames[id];
    
    console.log(games);
    
    listaGames[id] = req.body;

    res.status(200).json(listaGames[id]);
});

router.delete("/deletar/:id", (req,res) => {
    const id = req.params.id;

    listaGames.splice(id,1);
    
    res.json(listaGames);
});

module.exports = router; 