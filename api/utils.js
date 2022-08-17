const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const authRequired = (req, res, next) => {
  const token = req.signedCookies.token;
  console.log("Cookie Token:", token);
  try {
    const user = jwt.verify(token, JWT_SECRET);
    req.user = user;
  } catch (error) {
    res.status(401).send({
      loggedIn: false,
      message: "You are not authorized to modify this kitten!",
    });
    return;
  }

  next();
};

// isAdmin

module.exports = { authRequired };
