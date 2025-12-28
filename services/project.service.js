const Project = require("../models/Project.model");

exports.createProject = (userId, data) =>
  Project.create({ ...data, owner: userId });

exports.getProjects = (userId) =>
  Project.find({ owner: userId });
