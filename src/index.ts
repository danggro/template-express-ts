import express from "express";
const app = express();
import cors from "cors";

app.use(cors());
app.use(express.json());

const add = (a: number, b: number): number => a + b;

app.get("/", (_req, res) => {
  const a = 2;
  const b = 2;
  const result = add(a, b);
  res.json({ message: `${a} plus ${b} is ${result}` });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
