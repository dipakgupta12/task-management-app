// taskActions.ts

import {
  ADD_TASK_REQUEST,
  EDIT_TASK_REQUEST,
  DELETE_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  EDIT_TASK_SUCCESS,
  EDIT_TASK_FAILURE,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
} from "./actionTypes";

export const addTask = () => ({
  type: ADD_TASK_REQUEST,
});

export const loginSuccess = (user: any) => ({
  type: ADD_TASK_SUCCESS,
  payload: user,
});

export const loginFailure = (error: any) => ({
  type: ADD_TASK_FAILURE,
  payload: error,
});

export const editTask = () => ({
  type: EDIT_TASK_REQUEST,
});

export const signupSuccess = (user: any) => ({
  type: EDIT_TASK_SUCCESS,
  payload: user,
});

export const signupFailure = (error: any) => ({
  type: EDIT_TASK_FAILURE,
  payload: error,
});

export const deleteTask = () => ({
  type: DELETE_TASK_REQUEST,
});

export const deleteTaskSuccess = (user: any) => ({
  type: DELETE_TASK_SUCCESS,
  payload: user,
});

export const deleteTaskFailure = (error: any) => ({
  type: DELETE_TASK_FAILURE,
  payload: error,
});
