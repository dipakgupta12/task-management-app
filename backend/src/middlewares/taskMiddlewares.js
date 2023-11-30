import { apiResponse } from "../utils/index.js";

export const taskMiddleWare = {
  createTaskMiddleware: (req, res, next) => {
    try {
      const { title, description } = req.body;
      if (!title || title?.length === 0)
        return apiResponse.error(res, { error: "Title cannot be blank" });
      else if (!description || description?.length === 0)
        return apiResponse.error(res, { error: "Description cannot be blank" });
      next();
    } catch (error) {
      apiResponse.serverError(res);
    }
  },
};
