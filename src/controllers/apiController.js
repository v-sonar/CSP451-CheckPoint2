// API Controller
// Handles user-related API logic

const { addUser, getUser, listUsers } = require("../db/database");

// GET /api/users
function getAllUsers(req, res) {
  listUsers((err, users) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(users);
  });
}

// GET /api/users/:username
function getSingleUser(req, res) {
  const username = req.params.username;
  getUser(username, (err, user) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json(user);
  });
}

// POST /api/users
function createUser(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "Username and password required" });
  }
  addUser(username, password);
  res.status(201).json({ message: `User ${username} created` });
}

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser
};
