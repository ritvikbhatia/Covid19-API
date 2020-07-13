const express = require("express");

const router = express.Router();
const patientsApi = require("../../../controllers/api/v1/patients_api");
router.post("/register", patientsApi.register);
router.post("/:id/createreport", patientsApi.createReport);
router.get("/:id/allreports", patientsApi.allReport);

module.exports = router;
