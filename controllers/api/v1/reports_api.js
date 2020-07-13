const Patient = require("../../../models/patient");
const Report = require("../../../models/report");

module.exports.allReport = async function (req, res) {
  try {
    rep = await Report.find({ status: req.params.status })
      .populate("doctor")
      .populate("patient");

    return res.json(200, {
      message: rep,
    });
  } catch (err) {
    console.log(err);

    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};
