const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express backend!");
});

app.post("/api/data", (req, res) => {
  const body = req.body;
  res.json({ message: "Data received!", data: body });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
