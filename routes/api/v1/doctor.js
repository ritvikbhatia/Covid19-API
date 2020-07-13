const express = require("express");

const router = express.Router();
// const passport = require("passport");
const doctorsApi = require("../../../controllers/api/v1/doctors_api");
router.post("/register", doctorsApi.register);
router.post("/login", doctorsApi.createSession);

// router.get("/", postsApi.index);
// router.delete(
//   "/:id",
//   passport.authenticate("jwt", { session: false }),
//   postsApi.destroy
// );

module.exports = router;
