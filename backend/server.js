const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir el frontend
app.use(express.static(path.join(__dirname, "public")));

// API simple
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hola desde el backend con Node.js!" });
});

// Cualquier ruta no API → manda index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
