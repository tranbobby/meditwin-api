const express = require('express');     // Ligne 1
const app = express();                  // Ligne 2
const pool = require('./database');



app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use(express.json());

let patients = [
    { id: 1, nom: 'Dupont', prenom: 'Jean' },
    { id: 2, nom: 'Martin', prenom: 'Marie' }
];


app.get('/health', (req, res) => {      // Ligne 3
    res.json({ status: 'ok' });         // Ligne 4
});                                     // Ligne 5

app.listen(3000, () => {                // Ligne 6
    console.log('Serveur lancé');
});


app.get('/bonjour', (req, res) => {
    res.json({ message: 'hello Bobby' });
});


app.get('/patients', async (req, res) => {
    const result = await pool.query('SELECT * FROM patient');
    res.json(result.rows);
});


app.get('/patients/:id', async (req, res) => {
    let leId = parseInt(req.params.id);
    const searchId = await pool.query('select * from patient where id = $1', [leId]);
    if (!searchId) {
        res.status(404).json({ error: 'Patient non trouvé' });
    }
    else {
        res.json(searchId);
    }
});

app.post('/patients', (req, res) => {
    const patientRecu = req.body;
    if (!patientRecu.nom || !patientRecu.prenom) {
        res.status(400).json({ error: 'Donnée manquante' });
    }
    else {
        const nouveauPatient = { id: patients.length + 1, nom: patientRecu.nom, prenom: patientRecu.prenom };
        patients.push(nouveauPatient);
        res.status(201).json(nouveauPatient);
    }
});


app.delete('/patients/:id', (req, res) => {
    const idPatient = parseInt(req.params.id);
    const index = patients.findIndex(p => p.id === idPatient);

    if (index === -1) {
        res.status(404).json({ error: 'Donnée introuvable' });
    }
    else {
        patients.splice(index, 1);
        res.status(204).send();
    }
});

app.put('/patients/:id', (req, res) => {
    const patientId = parseInt(req.params.id);
    const patientRecu = req.body;
    const searchId = patients.find(p => p.id === patientId)
    if (!searchId) {
        res.status(404).json({ error: 'Erreur Patient non trouvé !' });
    }
    else {
        searchId.nom = patientRecu.nom;
        searchId.prenom = patientRecu.prenom;
        res.status(200).json(searchId);
    }
});


