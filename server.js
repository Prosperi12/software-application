const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

// Navigation Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/dashboard', (req, res) => res.sendFile(path.join(__dirname, 'public', 'dashboard.html')));
app.get('/questionnaire', (req, res) => res.sendFile(path.join(__dirname, 'public', 'questionnaire.html')));
app.get('/portal', (req, res) => res.sendFile(path.join(__dirname, 'public', 'portal.html')));
app.get('/report', (req, res) => res.sendFile(path.join(__dirname, 'public', 'report.html')));

// Makes "Save" buttons redirect back to Dashboard instead of crashing
app.post('/submit-data', (req, res) => res.redirect('/dashboard'));

app.listen(3000, () => console.log('Server active on Port 3000'));
