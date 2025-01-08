const express = require("express");
const db = require("../db");
const router = express.Router();

// Get subcategories for a specific category
router.get("/:cat_id", (req, res) => {
  const { cat_id } = req.params;
  const query = `SELECT * FROM sub_category WHERE cat_id = ?`;
  db.all(query, [cat_id], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: "Success", data: rows });
  });
});

module.exports = router;
