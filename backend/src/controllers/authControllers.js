import { apiResponse, hashAuth } from "../utils/index.js";

export const auth = {
  registerController: async (req, res) => {
    try {
      const reqBody = {
        ...req.body,
        password: await hashAuth.hashPassword(req.body.password),
      };
      const response = {
        message: "User registered successfully",
        user: reqBody,
      };
      return apiResponse.success(res, response);
    } catch (error) {
      return apiResponse.error(res, { error });
    }
  },

  loginController: async (req, res) => {
    try {
      const response = {
        user: req.body,
      };
      return apiResponse.success(res, response);
    } catch (error) {
      return apiResponse.error(res, { error });
    }
  },

  getUserController: async (req, res) => {
    try {
      const response = {};
      if (!response)
        return apiResponse.error(res, 404, { message: "User not found" });
      const user = {
        id: response?._id,
        email: response?.email,
        name: response?.name,
      };
      return apiResponse.success(res, { user });
    } catch (err) {
      console.log(err);
      return apiResponse.serverError(res);
    }
  },
};
