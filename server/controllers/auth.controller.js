import jwt from "jsonwebtoken";
import { expressjwt as expressJwt } from "express-jwt";
import User from "../models/user.model.js";
import config from "../../config/config.js";

export const signin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user)
      return res.status(401).json({ error: "User not found" });

    if (!user.authenticate(req.body.password))
      return res.status(401).json({ error: "Email and password do not match" });

    const token = jwt.sign(
      { _id: user._id, role: user.role },
      config.jwtSecret
    );

    res.cookie("t", token, {
      httpOnly: true,
      sameSite: "Strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400000
    });

    return res.json({
      token,
      user: { _id: user._id, name: user.name, email: user.email, role: user.role }
    });

  } catch (err) {
    return res.status(401).json({ error: "Could not sign in" });
  }
};

export const signout = (req, res) => {
  res.clearCookie("t");
  return res.status(200).json({ message: "Signed out" });
};

export const requireSignin = expressJwt({
  secret: config.jwtSecret,
  algorithms: ["HS256"],
  userProperty: "auth"
});


export const signup = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).json({ message: "Signup successful!" });
  } catch (err) {
    res.status(400).json({ error: "Signup failed", details: err });
  }
};


export const hasAuthorization = (req, res, next) => {
  const authorized =
    req.profile && req.auth && req.profile._id.toString() === req.auth._id;
  if (!authorized) {
    return res.status(403).json({ error: "User is not authorized" });
  }
  next();
};
