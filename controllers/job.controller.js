const jobService = require("../services/job.service");

exports.createJob = async (req, res) => {
  const job = await jobService.createJob();
  res.status(202).json(job);
};
