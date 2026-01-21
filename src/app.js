const express = require("express");
const path = require("path");

const { router: apiRouter } = require("./routes/api");
const { router: viewRouter } = require("./routes/views");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static frontend
app.use(express.static(path.join(__dirname, "..", "public")));

// Routes
app.use("/", viewRouter);
app.use("/api", apiRouter);
app.use("/auth", authRoutes);

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

// Error handler (keep simple for learning)
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
