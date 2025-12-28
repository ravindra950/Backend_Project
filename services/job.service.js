const Job = require("../models/Job.model");

exports.createJob = async () => {
  const job = await Job.create({ status: "PROCESSING" });

  setTimeout(async () => {
    job.status = "COMPLETED";
    job.result = "Execution successful";
    await job.save();
  }, 3000);

  return job;
};
