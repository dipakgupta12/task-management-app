// taskActions.ts
import { Dispatch } from 'redux';
import { ADD_TASK, EDIT_TASK, DELETE_TASK } from './actionTypes';
import { taskService } from '../../services/apiService';

// export const addTask = (task: Task) => async (dispatch: Dispatch) => {
//   try {
//     const newTask = await taskService.addTask(task);
//     dispatch({ type: ADD_TASK, payload: newTask });
//   } catch (error) {
//     console.error('Add task failed:', error);
//   }
// };

// export const editTask = (task: Task) => async (dispatch: Dispatch) => {
//   try {
//     const updatedTask = await taskService.editTask(task);
//     dispatch({ type: EDIT_TASK, payload: updatedTask });
//   } catch (error) {
//     console.error('Edit task failed:', error);
//   }
// };

export const deleteTask = (taskId: string) => async (dispatch: Dispatch) => {
  try {
    await taskService.deleteTask(taskId);
    dispatch({ type: DELETE_TASK, payload: taskId });
  } catch (error) {
    console.error('Delete task failed:', error);
  }
};
