import { apiResponse, hashAuth } from "../utils/index.js";
import db from "../config//database.js";
export const auth = {
  registerController: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const hashedPassword = await hashAuth.hashPassword(password);
      
      await db.execute(`
        CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
                    password VARCHAR(255) NOT NULL
        )
      `);
  
      const [existingUsers] = await db.execute(
        "SELECT * FROM users WHERE email = ?",
        [email]
      );
  
      if (existingUsers.length > 0) {
        const response = {
          message: "Email already exists. Please use a different email address.",
        };
        return apiResponse.error(res, response, 400);
      }
      await db.execute(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, hashedPassword]
      );
  
      const successResponse = {
        message: "User registered successfully",
      };
      return apiResponse.success(res, successResponse);
    } catch (error) {
            return apiResponse.error(res, { error });
    }
  },

  loginController: async (req, res) => {
    try {
      const { email, password } = req.body;
      const [existingUsers] = await db.execute(
        "SELECT * FROM users WHERE email = ?",
        [email]
      );

      if (existingUsers.length === 0) {
        let response = {
          message: "User not found. Please check your email or register.",
        };
        return apiResponse.error(res, response, 404);
      }

      const user = existingUsers[0];
            const isPasswordValid = await hashAuth.passwordMatch(
        password,
        user.password
      );

      if (!isPasswordValid) {
        const response = {
          message: "Incorrect password. Please try again.",
        };
        return apiResponse.error(res, response, 401);
      }

      const response = {
        message: "Login successful",
        token: await hashAuth.generateToken(user?.id, user?.name),
      };
      return apiResponse.success(res, response);
    } catch (error) {
      return apiResponse.error(res, { error });
    }
  },

  getUserController: async (req, res) => {
    try {
      const userId = req.params.userId;
      const [userData] = await db.execute("SELECT * FROM users WHERE id = ?", [
        userId,
      ]);
      if (!userData || userData.length === 0) {
        return apiResponse.error(res, 404, { message: "User not found" });
      }
      const user = {
        id: userData[0]?.id,
        email: userData[0]?.email,
        name: userData[0]?.name,
      };
      return apiResponse.success(res, { user });
    } catch (err) {
      return apiResponse.serverError(res);
    }
  },
};
