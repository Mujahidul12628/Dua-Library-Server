const express = require("express");
const db = require("../db");
const router = express.Router();

// Get all categories
router.get("/", (req, res) => {
  const query = `SELECT * FROM category`;
  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: "Success", data: rows });
  });
});

module.exports = router;
