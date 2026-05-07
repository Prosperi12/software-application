const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// PAGE NAVIGATION
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "public/index.html")));
app.get("/questionnaire", (req, res) => res.sendFile(path.join(__dirname, "public/questionnaire.html")));
app.get("/dashboard", (req, res) => res.sendFile(path.join(__dirname, "public/dashboard.html")));
app.get("/chat", (req, res) => res.sendFile(path.join(__dirname, "public/chat.html")));

// FORM SUBMISSION (Logic)
app.post("/submit-data", (req, res) => {
  console.log("Data received:", req.body);
  // Instead of a DB, we just push them to the next success state
  res.redirect("/dashboard"); 
});

app.listen(PORT, () => console.log(`App live at http://localhost:${PORT}`));
