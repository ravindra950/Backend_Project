const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const { generateAccessToken, generateRefreshToken } = require("../utils/jwt");

exports.register = async (data) => {
  const hash = await bcrypt.hash(data.password, 10);
  return User.create({ ...data, password: hash });
};

exports.login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password)))
    throw new Error("Invalid credentials");

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  user.refreshToken = refreshToken;
  await user.save();

  return { accessToken, refreshToken };
};
