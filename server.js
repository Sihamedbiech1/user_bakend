const express = require('express');
const db = require('./database'); // Importer la base de données
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Route GET - Vérifier si le serveur fonctionne
app.get('/', (req, res) => {
    res.send('Serveur Express fonctionne avec SQLite !');
});

// Route POST - Ajouter un utilisateur
app.post('/users', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "Nom et email sont requis" });
    }

    const query = `INSERT INTO users (name, email) VALUES (?, ?)`;
    db.run(query, [name, email], function(err) {
        if (err) {
            return res.status(500).json({ message: "Erreur lors de l'ajout de l'utilisateur", error: err.message });
        }
        res.status(201).json({ message: "Utilisateur créé avec succès", user: { id: this.lastID, name, email } });
    });
});

// Définir le port du serveur
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
// Route GET - Récupérer tous les utilisateurs
app.get('/users', (req, res) => {
    db.all("SELECT * FROM users", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ message: "Erreur lors de la récupération des utilisateurs", error: err.message });
        }
        res.json(rows);
    });
});
