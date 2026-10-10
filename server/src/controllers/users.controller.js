import User from "../models/users.model.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(401).json({
        success: false,
        message: "Please provide all the necessary information",
      });
      return;
    }

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      res.status(409).json({
        success: false,
        message: "Email already in use",
      });
      return;
    }

    const newUser = {
      name: name,
      email: email,
      password: password,
    };

    await User.create(newUser);

    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: "false",
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();

    if (!users) {
      res.status(204).json({
        success: false,
        message: "There are no entries in the database",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
