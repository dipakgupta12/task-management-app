// apiService.ts
import axios from "axios";
import { toast } from "react-toastify";

const API_BASE_URL = "http://localhost:8080/api";

interface Task {
  id: string;
  title: string;
  description: string;
}

export const authService = {
  login: async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error: any) {
      toast.error(error.response.data.data.message)
    }
  },

  signup: async (name: string, email: string, password: string) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/register`, {
        name,
        email,
        password,
      });
      return response.data;
    } catch (error: any) {
      toast.error(error.response.data.data.message)
    }
  },
};

export const taskService = {
  addTask: async (task: Task): Promise<Task> => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/tasks/add`, task);
      return response.data;
    } catch (error) {
      throw new Error("Add task failed");
    }
  },

  editTask: async (task: Task) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/api/tasks/edit/${task.id}`,
        task
      );
      return response.data;
    } catch (error) {
      throw new Error("Edit task failed");
    }
  },

  deleteTaskApi: async (taskId: string): Promise<void> => {
    try {
      await axios.delete(`${API_BASE_URL}/api/tasks/delete/${taskId}`);
    } catch (error) {
      throw new Error("Delete task failed");
    }
  },
};
