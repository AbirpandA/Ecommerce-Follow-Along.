const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Error creating user" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign({ user }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    res.status(200).json({ token, userId: user._id });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Error logging in user" });
  }
};

module.exports = {
  signUp,
  login,
};
