const Learner = require("../models/learnersModel");

exports.getAllLearners = async function (req, res) {
  try {
    const learners = await Learner.find();

    res.status(200).json({
      status: "success",
      results: learners.length,
      data: {
        learners,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
