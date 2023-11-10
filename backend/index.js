const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Conéctate a MongoDB (asegúrate de tener MongoDB instalado y tu conexión configurada)
mongoose.connect("mongodb://localhost:27017/priceComparator", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Importa y usa las rutas de precios y usuarios
const priceRoutes = require("./routes/priceRoutes");
const userRoutes = require("./routes/userRoutes");
app.use("/api", priceRoutes);
app.use("/api", userRoutes);

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
