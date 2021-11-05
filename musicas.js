const express = require("express");
const router = express.Router(); 

let listaMusicas = [{
    nome:"teste"
}];

router.get("/", (req,res) => {
res.status(200).json({message:"musicas ok"})
console.log("deu certo");
})

router.get("/listar", (req,res) => {
    res.status(200).json(listaMusicas);
});

router.get("/listar/:id", (req,res) => {
    const id = req.params.id;
    const musicas = listaMusicas[id];
    res.status(200).json({musicas:musicas});
});

router.post("/add", (req,res) => {
    const musicas = req.body;
    listaMusicas.push(musicas); 
    res.status(201).json({message:"cadastrado com sucesso"});
});

router.put("/:id", (req,res) => {
    const id = req.params.id;
    const musicas = listaMusicas[id];
    
    console.log(musicas);
    
    listaMusicas[id] = req.body;

    res.status(200).json(listaMusicas[id]);
});

router.delete("/deletar/:id", (req,res) => {
    const id = req.params.id;

    listaMusicas.splice(id,1);
    
    res.json(listaMusicas);
});

module.exports = router; 