const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/search/:name', async (req, res) => {
  // Logique de recherche de fruits
  const fruitName = req.params.name;
  // Appel au microservice de stockage pour récupérer les données
  // Exemple simplifié
  res.send(`Recherche pour le fruit : ${fruitName}`);
});

app.listen(PORT, () => {
  console.log(`Microservice de recherche running on port ${PORT}`);
});