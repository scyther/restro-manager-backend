const express = require("express");
var passport = require("passport");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res, next) => {
  if ((req.body.email === "") | (req.body.password === "")) {
    const error = new Error("Email can't be empty");
    return next(error);
  }
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error("An error occurred.");

        return next(error);
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const body = { _id: user._id, email: user.email };
        const token = jwt.sign({ user: body }, process.env.SECRET_KEY);

        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  async (req, res, next) => {
    const { password, ...rest } = req.user.toJSON();

    res.json({
      message: "Signup successful",
      user: rest,
    });
  }
);

module.exports = router;
