import express from "express";
import cors from "cors";

const app = express();  
app.use(cors());

const port = process.env.PORT || 3002;

import generate from "./generate.js";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

app.get("/generate", async (req, res) => {
  const { prompt } = req.query;
  try {
    const sqlQuery = await generate(prompt);
    res.json({ sqlQuery });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});