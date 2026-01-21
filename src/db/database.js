// Database module
// Handles connection to SQLite database and basic user operations

const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Database file path
const DB_PATH = path.join(__dirname, "app.db");

// Open database connection
const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error("Failed to connect to DB:", err.message);
  } else {
    console.log("Connected to SQLite database");
  }
});

// Create 'users' table if it doesn't exist
db.run(
  `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )`,
  (err) => {
    if (err) console.error("Failed to create users table:", err.message);
  }
);

// Add a new user
function addUser(username, password) {
  const stmt = db.prepare("INSERT INTO users (username, password) VALUES (?, ?)");
  stmt.run(username, password, (err) => {
    if (err) console.error("Error adding user:", err.message);
    else console.log(`User ${username} added successfully`);
  });
  stmt.finalize();
}

// Get a user by username
function getUser(username, callback) {
  db.get("SELECT * FROM users WHERE username = ?", [username], (err, row) => {
    if (err) return callback(err);
    callback(null, row);
  });
}

// List all users (for testing)
function listUsers(callback) {
  db.all("SELECT id, username FROM users", [], (err, rows) => {
    if (err) return callback(err);
    callback(null, rows);
  });
}

module.exports = {
  db,
  addUser,
  getUser,
  listUsers
};
// Add a new user
function addUser(username, password) {
  const stmt = db.prepare("INSERT INTO users (username, password) VALUES (?, ?)");
  stmt.run(username, password, (err) => {
    if (err) console.error("Error adding user:", err.message);
    else console.log(`User ${username} added successfully`);
  });
  stmt.finalize();
}

// Get a user by username
function getUser(username, callback) {
  db.get("SELECT * FROM users WHERE username = ?", [username], (err, row) => {
    if (err) return callback(err);
    callback(null, row);
  });
}

// List all users (for testing)
function listUsers(callback) {
  db.all("SELECT id, username FROM users", [], (err, rows) => {
    if (err) return callback(err);
    callback(null, rows);
  });
}
