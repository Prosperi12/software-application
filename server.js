const express = require('express');
const path = require('path');
const app = express();

// This line is CRITICAL: It lets the server find your CSS/Images in the 'public' folder
app.use(express.static('public'));

// --- THE NAVIGATION MAP (ROUTES) ---

// When the URL is http://localhost:3000/
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// When the URL is http://localhost:3000/dashboard
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});


app.get('/questionnaire', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'questionnaire.html'));
});
// When the URL is http://localhost:3000/portal
app.get('/portal', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'portal.html'));
});

// When the URL is http://localhost:3000/report
app.get('/report', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'report.html'));
});

app.listen(3000, () => console.log('Server active on Port 3000'));
