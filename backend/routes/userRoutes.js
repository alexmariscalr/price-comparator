// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Ruta para obtener todos los usuarios
router.get("/users", userController.getAllUsers);

// Ruta para obtener la información de un usuario por su ID
router.get("/users/:userId", userController.getUserById);

// Ruta para actualizar la información de un usuario por su ID
router.put("/users/:userId", userController.updateUser);

// Ruta para agregar un nuevo usuario
router.post("/users", userController.addUser);

// Ruta para eliminar un usuario por su ID
router.delete("/users/:userId", userController.deleteUser);

module.exports = router;
