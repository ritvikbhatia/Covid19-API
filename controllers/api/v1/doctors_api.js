const Doctor = require("../../../models/doctor");
const jwt = require("jsonwebtoken");
// const env = require('../../../config/environment');

module.exports.createSession = async function (req, res) {
  try {
    let doctor = await Doctor.findOne({ username: req.body.username });

    if (!doctor || doctor.password != req.body.password) {
      return res.json(422, {
        message: "Invalid username or password",
      });
    }

    return res.json(200, {
      message: "Sign in successful, here is your token, please keep it safe!",
      data: {
        token: jwt.sign(doctor.toJSON(), "secret", { expiresIn: "100000" }),
      },
    });
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};

module.exports.register = async function (req, res) {
  try {
    if (req.body.password != req.body.confirm_password) {
      return res.json(400, { message: "Passwords Do not Match" });
    }
    Doctor.findOne({ username: req.body.username }, function (err, doctor) {
      if (!doctor) {
        Doctor.create(req.body, function (err, user) {
          return res.json(200, {
            message: "You have signed up, login to continue!",
          });
        });
      } else {
        return res.json(400, { message: "user already present" });
      }
    });
  } catch (err) {
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};
