import db from "../config/database.js";
import { createTasksTable } from "../migrations/task.js";
import { apiResponse } from "../utils/index.js";

export const task = {
  createTaskController: async (req, res) => {
    try {
      await createTasksTable();
      const userId = req.params?.userId;
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

  getAllTaskController: async (req, res) => {
    try {
      const userId = req.params?.userId;
      
      const [tasks] = await db.execute(
        "SELECT * FROM tasks WHERE user_id = ?",
        [userId]
      );

      const response = {
        total: tasks?.length,
        tasks,
      };

      return apiResponse.success(res, response);
    } catch (error) {
      return apiResponse.error(res, { error });
    }
  },

  getSingleTaskController: async (req, res) => {
    try {
      const taskId = req.params.taskId;
      const userId = req.params.userId;

      const [task] = await db.execute(
        "SELECT * FROM tasks WHERE id = ? AND user_id = ?",
        [taskId, userId]
      );

      if (task.length === 0) {
        const response = {
          message: "Task not found for the specified user",
        };
        return apiResponse.error(res, response, 404);
      }

      const response = {
        task: task[0],
      };

      return apiResponse.success(res, response);
    } catch (error) {
      return apiResponse.error(res, { error });
    }
  },
};
