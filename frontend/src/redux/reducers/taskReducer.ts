// taskReducer.ts
import { ADD_TASK, EDIT_TASK, DELETE_TASK } from "../actions/actionTypes";

interface Task {
  id: string;
  title: string;
  description: string;
  // Other properties of a task
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

const taskReducer = (state = initialState, action: any): TaskState => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export default taskReducer;
