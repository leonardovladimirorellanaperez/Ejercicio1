import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import userRoutes from "./src/routes/user.route.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "src", "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "src", "public")));

app.use("/", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
