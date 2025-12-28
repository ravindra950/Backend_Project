const Workspace = require("../models/Workspace.model");

exports.createWorkspace = async (req, res) => {
  const ws = await Workspace.create(req.body);
  res.status(201).json(ws);
};

exports.getWorkspaces = async (req, res) => {
  const data = await Workspace.find({ projectId: req.params.projectId });
  res.json(data);
};
