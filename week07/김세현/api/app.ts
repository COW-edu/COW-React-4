import express from "express";
import todoRoutes from "./routes/todoRoutes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(todoRoutes);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
