const express = require("express");
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,"public") ))

const pokedex = [{
  id:1 ,
  nome:"Pidgey",
  descricao:"Muito dócil. Se atacado, ele geralmente levanta areia para se proteger, em vez de revidar.",
  categoria:"Pequeno pássaro",
  tipo:"Normal, Vôo",
  imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
},{
  id:2 ,
  nome:"Nidorino",
  descricao:"Com um chifre que é mais duro que diamante, este Pokémon anda por aí quebrando pedregulhos enquanto procura uma pedra da lua.",
  categoria:"Pino Veneno",
  tipo:"Venenoso",
  imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png"
},{
  id:3 ,
  nome:"Umbreon",
  descricao:"Quando este Pokémon fica com raiva, seus poros secretam um suor venenoso, que pulveriza nos olhos de seu oponente.",
  categoria:"Luar",
  tipo:"Escuro",
  imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png"
},]

app.get("/", (req, res) => {
  res.render("index", {pokedex})
});

app.listen(3000, () => console.log("Sevidor rodando em http://localhost:3000"));
