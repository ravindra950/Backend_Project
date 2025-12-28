const Job = require("../models/Job.model");

setInterval(async () => {
  const job = await Job.findOne({ status: "PENDING" });
  if (!job) return;

  job.status = "PROCESSING";
  await job.save();

  setTimeout(async () => {
    job.status = "COMPLETED";
    job.result = "Task done";
    await job.save();
  }, 3000);
}, 5000);
