const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve your HTML/CSS frontend
app.use(express.static(path.join(__dirname, "public")));

// Test backend route
app.get("/api/health", (req, res) => {
  res.json({ message: "Backend is working" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
