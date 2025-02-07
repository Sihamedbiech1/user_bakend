const sqlite3 = require('sqlite3').verbose();

// Création ou ouverture de la base de données SQLite
const db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err.message);
    } else {
        console.log('Connecté à la base de données SQLite');
    }
});

// Création de la table "users" si elle n'existe pas
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
)`, (err) => {
    if (err) {
        console.error('Erreur lors de la création de la table :', err.message);
    } else {
        console.log('Table "users" prête');
    }
});

module.exports = db;
