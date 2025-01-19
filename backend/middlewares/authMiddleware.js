import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

// Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Extract token from the Authorization header

    if (!token) {
      return res
        .status(401)
        .json({ message: "Authentication failed, no token provided" });
    }

    const decode = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication failed, invalid token" });
  }
};

// Protect Middleware
export const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from the Authorization header

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user data to the request
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// Admin Middleware to restrict access to admin routes only
export const isAdmin = (req, res, next) => {
  // Ensure that user role is verified after token is decoded
  if (req.user?.role !== "admin") {
    return res.status(403).json({ message: "Access denied, not an admin" });
  }
  next();
};
