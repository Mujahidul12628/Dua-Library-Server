const express = require("express");
const cors = require("cors");

const categoryRoutes = require("./routes/category");
const subcategoryRoutes = require("./routes/subCategory");
const duaRoutes = require("./routes/dua");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Dua Library Server");
});

// Routes
app.use("/categories", categoryRoutes);
app.use("/subcategories", subcategoryRoutes);
app.use("/duas", duaRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
