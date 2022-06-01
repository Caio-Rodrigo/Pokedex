const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex = [
  {
    id: 1,
    nome: "Pidgey",
    descricao:
      "Muito dócil. Se atacado, ele geralmente levanta areia para se proteger, em vez de revidar.",
    categoria: "Pequeno pássaro",
    tipo: "Normal, Vôo",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
  },
  {
    id: 2,
    nome: "Nidorino",
    descricao:
      "Com um chifre que é mais duro que diamante, este Pokémon anda por aí quebrando pedregulhos enquanto procura uma pedra da lua.",
    categoria: "Pino Veneno",
    tipo: "Venenoso",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png",
  },
  {
    id: 3,
    nome: "Umbreon",
    descricao:
      "Quando este Pokémon fica com raiva, seus poros secretam um suor venenoso, que pulveriza nos olhos de seu oponente.",
    categoria: "Luar",
    tipo: "Escuro",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png",
  },
];

let pokemon = undefined;

app.get("/", (req, res) => {
  res.render("index", { pokedex, pokemon });
});

app.post("/create", (req, res) => {
  const pokemon = req.body;
  pokemon.id = pokedex.length + 1;
  pokedex.push(pokemon);
  res.redirect("/#cards");
});

app.get("/detalhes/:id", (req, res) => {
  const id = +req.params.id;
  pokemon = pokedex.find((pokemon) => pokemon.id === id);
  res.redirect("/");
});

app.post("/update/:id", (req, res) => {
  const id = +req.params.id - 1;
  const newPokemon = req.body;
  newPokemon.id = id + 1;
  pokedex[id] = newPokemon;
  pokemon = undefined;
  res.redirect("/#cards");
});

app.get("/delete/:id", (req, res) => {
  const id = +req.params.id - 1;

  delete pokedex[id];
  pokemon = undefined;

  res.redirect("/#cards");
});

app.listen(3000, () => console.log("Sevidor rodando em http://localhost:3000"));
