const express = require("express");

const router = express.Router();

console.log("router loaded");

router.get("/", (req, res) => {
  res.send("hello");
});

router.use("/api", require("./api"));

module.exports = router;
