// Authentication controller
// This file handles login-related business logic
// Keeping auth logic in a controller makes routes cleaner
// and allows easier testing and future expansion

/**
 * Validates login input types and values
 * This exists to prevent malformed requests from reaching auth logic
 */
function validateLoginInput(username, password) {
  if (typeof username !== "string" || typeof password !== "string") {
    return false;
  }

  if (username.trim().length === 0 || password.trim().length === 0) {
    return false;
  }

  return true;
}

/**
 * Main login handler
 * Currently uses hardcoded credentials as a placeholder
 */
function loginUser(req, res) {
  const { username, password } = req.body;

  // Validate request body exists
  if (!req.body) {
    return res.status(400).json({
      error: "Request body is missing"
    });
  }

  // Validate username and password values
  if (!validateLoginInput(username, password)) {
    return res.status(400).json({
      error: "Invalid username or password format"
    });
  }

  // Temporary hardcoded authentication logic
  // This will later be replaced with database validation
  if (username === "admin" && password === "password") {
    return res.status(200).json({
      message: "Login successful"
    });
  }

  // If credentials do not match, deny access
  return res.status(401).json({
    error: "Invalid username or password"
  });
}

module.exports = {
  loginUser
};
