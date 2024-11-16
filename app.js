const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
/**
 * Routes for handling requests related to "tipoProyecto".
 *
 * @module routes/tipoProyectoRoutes
 */
const tipoProyectoRoutes = require("./src/routes/tipoProyectoRoutes");
const clienteRoutes = require("./src/routes/clienteRoutes");
const etapaRoutes = require("./src/routes/etapaRoutes");
const universidadRoutes = require("./src/routes/universidadRoutes");
const proyectoRoutes = require("./src/routes/proyectoRoutes");

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.use("/api/tipoproyecto", tipoProyectoRoutes);
app.use("/api/cliente", clienteRoutes);
app.use("/api/etapa", etapaRoutes);
app.use("/api/universidad", universidadRoutes);
app.use("/api/proyecto", proyectoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
