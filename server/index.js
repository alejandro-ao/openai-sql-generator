import express from "express";
import cors from "cors";

const app = express();
app.use(express.json()); 

app.use(cors(
  { origin: "*" }
));

const port = process.env.PORT || 3002;

import generate from "./generate.js";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

app.post("/generate", async (req, res) => {
  const { queryDescription } = req.body
  try {
    const sqlQuery = await generate(queryDescription);
    res.json({ sqlQuery });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});