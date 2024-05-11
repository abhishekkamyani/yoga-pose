const model = require("../models/User");
const User = model.User;
const bcrypt = require("bcryptjs");

exports.profile = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id, {
      password: 0,
    });

    res.json(user);
  } catch (error) {
    // console.log("profile", error);
    next({ status: 404, error: "User not found" });
  }
};

exports.updateProfile = async (req, res, next) => {
  try {
    const userId = req.userId;

    let { user: userData, password } = req.body;
    userData = JSON.parse(userData);

    const user = await User.findById(userId);

    if (!bcrypt.compareSync(password, user.password)) {
      return next({ status: 401, error: "Incorrect Password 😥" });
    }

    delete user.password;
    const serverUrl = req.protocol + "://" + req.get("host");
    console.log(serverUrl);

    if (req.files.avatar) {
      const file = req.files.avatar[0];
      const avatar = serverUrl + "/" + file.path;
      userData.avatar = avatar;
    }

    if (req.files.cover) {
      const file = req.files.cover[0];
      const cover = serverUrl + "/" + file.path;
      userData.cover = cover;
    }

    delete userData.email;
    delete userData.dateJoined;


    const result = await user.updateOne(userData);

    console.log(result);

    res.json({ message: "Profile updated successfully." });

  } catch (error) {
    console.log(error);
    return next({});
  }
};