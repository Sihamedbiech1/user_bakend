const express = require('express'); // Importer Express
const app = express(); // Initialiser l'application Express

// Définir une route GET sur "/"
app.get('/', (req, res) => {
    res.send('Serveur Express fonctionne !'); // Réponse envoyée au navigateur
});

// Définir le port du serveur
const PORT = 5000;

// Démarrer le serveur et afficher un message dans la console
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
