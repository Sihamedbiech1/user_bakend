const express = require('express'); // Importer Express
const app = express(); // Initialiser l'application Express

// Middleware pour parser le JSON dans les requêtes
app.use(express.json());

// Route GET sur "/"
app.get('/', (req, res) => {
    res.send('Serveur Express fonctionne !'); // Réponse envoyée au navigateur
});

// Route POST sur "/users"
app.post('/users', (req, res) => {
    const { name, email } = req.body; // Récupérer les données envoyées

    if (!name || !email) {
        return res.status(400).json({ message: "Nom et email sont requis" });
    }

    res.status(201).json({ message: "Utilisateur créé avec succès", user: { name, email } });
});

// Définir le port du serveur
const PORT = 5000;

// Démarrer le serveur et afficher un message dans la console
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
