const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// FIX: This allows your server to read the data sent from your forms
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve all your HTML/CSS/JS from the public folder
app.use(express.static(path.join(__dirname, "public")));

// ROUTE: The main page (Login)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ROUTE: The Questionnaire page
app.get("/questionnaire", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "questionnaire.html"));
});

// ROUTE: Handling the Form Submission
// This "functions" by receiving the data and sending the user to the dashboard
app.post("/submit-data", (req, res) => {
  const studentData = req.body;
  console.log("New Student Data Received:", studentData);
  
  // Since we aren't using a database, we just redirect them to the dashboard
  res.redirect("/dashboard.html"); 
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
