import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// Protect route middleware
export const protect = async (req, res, next) => {
  let token;

  // Check if Authorization header is present
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      // Extract the token from the authorization header
      token = req.headers.authorization.split(" ")[1];
      
      // Log the token for debugging
      console.log("Token received:", token);

      // Verify the token and decode it
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Log decoded information for debugging
      console.log("Decoded user:", decoded);

      // Fetch the user from the database based on the decoded token ID
      req.user = await User.findById(decoded._id).select("-password");

      // Log the user fetched from DB
      console.log("User from DB:", req.user);

      if (!req.user) {
        return res.status(401).json({ message: "User not found" });
      }

      next(); // Proceed to the next middleware
    } catch (error) {
      // Handle token errors
      if (error.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Token expired" });
      }
      
      console.error("Token verification failed:", error);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    // If no token is provided
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

// Admin route middleware
export const admin = (req, res, next) => {
  // Log the user object to check if it's populated
  console.log("User role:", req.user ? req.user.role : "No user found");

  // Check if the user is an admin
  if (req.user && req.user.role === "admin") {
    next(); // Proceed to the next middleware
  } else {
    // If the user is not an admin
    res.status(403).json({ message: "Not authorized as admin" });
  }
};
