import db from "../config/database.js";
import { createTasksTable } from "../migrations/task.js";
import { apiResponse } from "../utils/index.js";

export const task = {
  createTaskController: async (req, res) => {
    try {
      await createTasksTable();
      const userId = req.params.userId;
      const { title, description } = req.body;

      const [result] = await db.execute(
        "INSERT INTO tasks (user_id, title, description, created_at) VALUES (?, ?, ?, NOW())",
        [userId, title, description]
      );
      const taskId = result.insertId;

      const response = {
        message: "Task created successfully",
        task: {
          id: taskId,
          user_id: userId,
          title,
          description,
          created_at: new Date().toISOString(),
        },
      };

      return apiResponse.success(res, response);
    } catch (error) {
      return apiResponse.error(res, { error });
    }
  },
};
