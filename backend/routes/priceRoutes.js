// routes/priceRoutes.js
const express = require("express");
const router = express.Router();
const priceController = require("../controllers/priceController");

// Ruta para obtener todos los precios
router.get("/prices", priceController.getAllPrices);

// Ruta para obtener el precio de un artículo específico
router.get("/prices/:itemId", priceController.getPriceById);

// Ruta para actualizar el precio de un artículo
router.put("/prices/:itemId", priceController.updatePrice);

// Ruta para agregar un nuevo artículo y su precio
router.post("/prices", priceController.addPrice);

// Ruta para eliminar un artículo y su precio
router.delete("/prices/:itemId", priceController.deletePrice);

module.exports = router;
