const UserProfile = require("../models/user.model");

const createUserProfile = async (req, res) => {
  try {
    const { firstName, lastName, role, photo, linkedin, twitter } = req.body;

    if (!firstName || !lastName || !role) {
      return res
        .status(400)
        .json({ message: "First name, Last name, and Role are required." });
    }

     let photoUrl = "https://img.freepik.com/premium-photo/user-icon-person-symbol-human-avatar-3d-render_473931-217.jpg?w=740"; 
    if (req.file && req.file.path) {
      photoUrl = req.file.path;
    }

    const newUser = new UserProfile({
      firstName,
      lastName,
      role,
      photo:photoUrl,
      linkedin,
      twitter,
    });

    const savedUser = await newUser.save();

    res.status(201).json({
      message: "User profile created successfully",
      data: savedUser,
    });
  } catch (error) {
    console.error("Error creating user profile:", error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const getUser = async (req, res) => {
    try {
        const users = await UserProfile.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: "Error fetching books", error: err.message });
    }
};

module.exports = {createUserProfile, getUser}