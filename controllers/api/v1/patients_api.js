const Patient = require("../../../models/patient");
const Report = require("../../../models/report");
module.exports.register = async function (req, res) {
  try {
    Patient.findOne({ phone: req.body.phone }, function (err, patient) {
      if (!patient) {
        Patient.create(req.body, function (err, user) {
          return res.json(200, {
            message: "Patient Registered Successfully",
          });
        });
      } else {
        return res.json(400, { message: "Patient already present" });
      }
    });
  } catch (err) {
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};

module.exports.createReport = async function (req, res) {
  try {
    // console.log(req.params.id);

    report = await Report.create({
      patient: req.params.id,
      doctor: req.body.doctor,
      status: req.body.status,
    });
    return res.json(200, {
      message: "Report created Successfully",
    });
  } catch (err) {
    console.log(err);

    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};
