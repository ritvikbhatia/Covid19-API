const express = require("express");

const router = express.Router();
const reports_api = require("../../../controllers/api/v1/reports_api");
router.get("/:status", reports_api.allReport);

module.exports = router;
