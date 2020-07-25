const express = require("express");
const router = express.Router();

const { book } = require ("../controllers");


//get api/books

router.get("/", book.list);

//post api/books

router.post("/", book.add);

//delete api/book/id

router.delete("/:_id",book.delete);

module.exports = router;
