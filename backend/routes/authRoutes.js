import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

// Public routes
// REGISTER || POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

// Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

// Test route - accessible only if logged in and is admin
router.get("/test", requireSignIn, isAdmin, testController);

// Admin routes - these routes should only be accessed by admins
router.use("/admin", requireSignIn, isAdmin); // Ensure authentication and authorization for all admin routes

router.get("/admin/dashboard", (req, res) => {
  res.send("Admin Dashboard");
});

export default router;
