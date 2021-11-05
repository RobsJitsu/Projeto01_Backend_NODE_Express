const express = require("express");
const router = express.Router(); 

let listaFilmes = [{
    nome:"teste"
}];

router.get("/", (req,res) => {
res.status(200).json({message:"filmes ok"})
console.log("deu certo");
})

router.get("/listar", (req,res) => {
    res.status(200).json(listaFilmes);
});

router.get("/listar/:id", (req,res) => {
    const id = req.params.id;
    const filme = listaFilmes[id];
    res.status(200).json({filme:filme});
});

router.post("/add", (req,res) => {
    const filmes = req.body;
    listaFilmes.push(filmes); 
    res.status(201).json({message:"cadastrado com sucesso"});
});

router.put("/:id", (req,res) => {
    const id = req.params.id;
    const filmes = listaFilmes[id];
    
    console.log(filmes);
    
    listaFilmes[id] = req.body;

    res.status(200).json(listaFilmes[id]);
});

router.delete("/deletar/:id", (req,res) => {
    const id = req.params.id;

    listaFilmes.splice(id,1);
    
    res.json(listaFilmes);
});

module.exports = router; 