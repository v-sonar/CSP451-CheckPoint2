const express = require("express");
const path = require("path");

// Import routers
const { router: apiRouter } = require("./routes/api");
const { router: viewRouter } = require("./routes/views");
const authRoutes = require("./routes/authRoutes");

// If your API endpoints are defined in "./routes/apiRoutes", use this:
// const { router: apiFeatureRouter } = require("./routes/apiRoutes");

const app = express();

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static frontend
app.use(express.static(path.join(__dirname, "..", "public")));

// Routes

// View routes (frontend)
app.use("/", viewRouter);

// Base API router (from original starter routes)
app.use("/api", apiRouter);

// Authentication routes (login, etc.)
app.use("/auth", authRoutes);

// If your API feature endpoints are in a separate router file
// (uncomment if you created "./routes/apiRoutes")
// app.use("/api", apiFeatureRouter);

// Optional test route (database connection test)
const { listUsers } = require("./db/database");
app.get("/db-test", (req, res) => {
  listUsers((err, users) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ users });
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
