const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ["PENDING", "PROCESSING", "COMPLETED", "FAILED"],
    default: "PENDING",
  },
  result: String,
}, { timestamps: true });

module.exports = mongoose.model("Job", jobSchema);
