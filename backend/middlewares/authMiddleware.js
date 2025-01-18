import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

// Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (error) {
    res.status(401).send({ message: "Authentication failed, invalid token" });
  }
};

// Protect Middleware
export const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from the Authorization header

  if (!token) {
    return res.status(401).send({ message: "No token provided" });
  }

  try {
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user data to the request
    next();
  } catch (error) {
    res.status(401).send({ message: "Invalid token" });
  }
};

// Admin Middleware to restrict access to admin routes only
export const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).send({ message: "Access denied, not an admin" });
  }
  next();
};
