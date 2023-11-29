// apiService.ts
import axios from "axios";

const API_BASE_URL = "http://your-api-base-url";

interface Task {
  id: string;
  title: string;
  description: string;

}

interface User {
  email: string;
  password: string;

}

export const authService = {
  login: async (email: string, password: string): Promise<User> => {
    try {
      console.log('-------services')
      const response = await axios.post(`${API_BASE_URL}/api/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw new Error("Login failed");
    }
  },

  signup: async (username: string, password: string): Promise<User> => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/signup`, {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      throw new Error("Signup failed");
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

  deleteTask: async (taskId: string): Promise<void> => {
    try {
      await axios.delete(`${API_BASE_URL}/api/tasks/delete/${taskId}`);
    } catch (error) {
      throw new Error("Delete task failed");
    }
  },
};
