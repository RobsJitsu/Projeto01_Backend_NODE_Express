const express = require("express");
const router = express.Router(); 

let listaMusicas = [];

router.get("/", (req,res) => {
    res.status(200).json({message:"músicas ok"})
    })

router.get("/listar", (req,res) => {
    res.status(200).json(listaMusicas);
});

router.get("/listar/:nome", (req,res) => {
  const nome = req.params.nome;
  const musicas = listaMusicas.find((item) => 
  item.nome === nome);
  res.status(200).json(musicas);
});

router.get("/listarindex/:nome", (req,res) => {
    const nome = req.params.nome;
    const index = listaMusicas.findIndex((item) => 
    item.nome === nome);

    if(index == -1){
        res.status(204);
        return;
    }
    res.status(200).json({index:index});
});

router.post("/", (req,res) => {
    const musicas = req.body;

    listaMusicas.push(musicas); 
    
    res.status(201).json({message:"cadastrado com sucesso"} (listaMusicas));
});

router.put("/:id", (req,res) => {
    const id = req.params.id;
    const musicas = listaMusicas[id];
    
    console.log(musicas);
    
    listaMusicas[id] = req.body;

    res.status(200).json(listaMusicas[id]);
});

router.delete("/:id", (req,res) => {
    const id = req.params.id;
    delete listaMusicas[id];

    console.log(listaMusicas[id]);
    
    res.status(200).json(listaMusicas);
});

router.delete("/deletar/:id", (req,res) => {
    const id = req.params.id;

    listaMusicas.splice(id,1);
    
    res.json(listaMusicas);
});

module.exports = router; 