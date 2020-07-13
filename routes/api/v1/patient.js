const express = require("express");

const router = express.Router();
// const passport = require("passport");
const patientsApi = require("../../../controllers/api/v1/patients_api");

// router.get("/", postsApi.index);
// router.delete(
//   "/:id",
//   passport.authenticate("jwt", { session: false }),
//   postsApi.destroy
// );

module.exports = router;
