const express = require("express");
const db = require("../db");
const router = express.Router();

// Get duas for a specific subcategory
router.get("/:subcat_id", (req, res) => {
  const { subcat_id } = req.params;
  const query = `SELECT * FROM dua WHERE subcat_id = ?`;
  db.all(query, [subcat_id], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: "Success", data: rows });
  });
});

module.exports = router;
