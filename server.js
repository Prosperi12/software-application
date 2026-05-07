const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ALL PAGE ROUTES
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "public/index.html")));
app.get("/dashboard", (req, res) => res.sendFile(path.join(__dirname, "public/dashboard.html")));
app.get("/portal", (req, res) => res.sendFile(path.join(__dirname, "public/portal.html")));
app.get("/questionnaire", (req, res) => res.sendFile(path.join(__dirname, "public/questionnaire.html")));
app.get("/report", (req, res) => res.sendFile(path.join(__dirname, "public/report.html")));

// FORM LOGIC
app.post("/submit-data", (req, res) => {
  console.log("Data received:", req.body);
  res.redirect("/dashboard"); 
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
