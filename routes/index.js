const express = require("express");
const router = express.Router();

const BookRoutes = require ("./book");

router.use("/books", BookRoutes);

module.exports = router;
