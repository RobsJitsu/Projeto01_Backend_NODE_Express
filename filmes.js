const express = require("express");
const router = express.Router(); 

let listaFilmes = [];

router.get("/", (req,res) => {
res.status(200).json({message:"filmes ok"})
})

router.get("/listar", (req,res) => {
    res.status(200).json(listaFilmes);
});

router.get("/listar/:nome", (req,res) => {
  const nome = req.params.nome;
  const filmes = listaFilmes.find((item) => 
  item.nome === nome);
  res.status(200).json(filmes);
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

router.delete("/:id", (req,res) => {
    const id = req.params.id;
    delete listaFilmes[id];

    console.log(listaFilmes[id]);
    
    res.status(200).json(listaFilmes);
});

router.delete("/deletar/:id", (req,res) => {
    const id = req.params.id;

    listaFilmes.splice(id,1);
    
    res.json(listaFilmes);
});

module.exports = router; 