const jwt = require("jsonwebtoken");
// const fs = require("fs");
// const path = require("path");
// const publicKey = fs.readFileSync(
//   path.join(__dirname, "../keys/public.key"),
//   "utf8"
// );
const publicKey = process.env.PUBLIC_KEY;

const authMiddleware = (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return next({ status: 401, error: "Unauthorized access" });
    }

    const { id } = jwt.verify(token, publicKey);

    if (!id) {
      return next({ status: 401, error: "Unauthorized access" });
    }

    req.userId = id;
    next();
  } catch (error) {
    return next(error);
  }
};

module.exports = authMiddleware;
