const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server is up and running bro");
});

module.exports = router;
