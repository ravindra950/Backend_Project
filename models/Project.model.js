const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  collaborators: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      role: String,
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);
