const express = require("express");

const router = express.Router();
// const passport = require("passport");
const patientsApi = require("../../../controllers/api/v1/patients_api");
router.post("/register", patientsApi.register);
router.post("/:id/createreport", patientsApi.createReport);

// router.get("/", postsApi.index);
// router.delete(
//   "/:id",
//   passport.authenticate("jwt", { session: false }),
//   postsApi.destroy
// );

module.exports = router;
