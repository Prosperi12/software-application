const express = require('express');
const path = require('path');
const app = express();

// Serve all files from the 'public' folder
app.use(express.static('public'));

// --- THE NAVIGATION MAP (ROUTES) ---

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.get('/questionnaire', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'questionnaire.html'));
});

app.get('/portal', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'portal.html'));
});

app.get('/report', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'report.html'));
});

app.get('/matches', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'matches.html'));
});

// This handles "Action" buttons (like Save or Submit) 
// It just sends the user back to the dashboard for now
app.post('/submit-data', (req, res) => {
    res.redirect('/dashboard');
});

app.listen(3000, () => console.log('Server active on Port 3000'));
