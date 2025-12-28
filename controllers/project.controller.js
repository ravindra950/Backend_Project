const projectService = require("../services/project.service");

exports.create = async (req, res) => {
  const project = await projectService.createProject(req.user.id, req.body);
  res.status(201).json(project);
};

exports.list = async (req, res) => {
  const projects = await projectService.getProjects(req.user.id);
  res.json(projects);
};
