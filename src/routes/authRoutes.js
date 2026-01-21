// Authentication routes
// Routes only define endpoints and delegate logic to controllers

const express = require("express");
const router = express.Router();
const { loginUser } = require("../controllers/authController");

// POST /auth/login
// Handles user login requests
router.post("/login", loginUser);

module.exports = router;
