import { apiResponse, hashAuth } from "../utils/index.js";

export const authMiddleWare = {
  registerMiddleware: (req, res, next) => {
    try {
      const { name, email, password } = req.body;

      if (!name) {
        return apiResponse.error(res, {
          message: "Please enter a user name",
        });
      } else if (name.length <= 3) {
        return apiResponse.error(res, {
          message: "Please enter a user name with more than 3 characters",
        });
      } else if (!email) {
        return apiResponse.error(res, {
          message: "Please enter an email address",
        });
      } else if (!isValidEmail(email)) {
        return apiResponse.error(res, {
          message: "Please enter a valid email address",
        });
      } else if (!password) {
        return apiResponse.error(res, {
          message: "Please enter a password",
        });
      } else if (password.length < 6) {
        return apiResponse.error(res, {
          message: "Please enter a password with at least 6 characters",
        });
      }

      next();
    } catch (error) {
      return apiResponse.serverError(res);
    }
  },

  authenticateToken: (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token)
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized access" });

    const decoded = hashAuth.verifyToken(token);
    if (!decoded)
      return res.status(401).json({ success: false, message: "Invalid token" });
    req.params.userId = decoded?.userId;
    next();
  },
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
