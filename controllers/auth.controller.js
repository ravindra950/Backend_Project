const authService = require("../services/auth.service");

exports.register = async (req, res) => {
  const user = await authService.register(req.body);
  res.status(201).json(user);
};

exports.login = async (req, res) => {
  const tokens = await authService.login(req.body);
  res.json(tokens);
};
