const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/recommend', (req, res) => {
  // Logique de recommandation de fruits basée sur les préférences de l'utilisateur
  res.send('Recommandations de fruits');
});

app.listen(PORT, () => {
  console.log(`Microservice de recommandation running on port ${PORT}`);
});