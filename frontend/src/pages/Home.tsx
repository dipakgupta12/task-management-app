import React, { useEffect, useState } from "react";
import TaskListCard from "../components/Task/TaskListCard";
import Loader from "../components/Loader/Loader";
import DeleteModal from "../components/DeleteModal";
import AddTaskModal from "../components/AddTaskModal";
import {
  addTaskFields,
  addTaskValidationSchema,
} from "../components/Auth/constants";
import {
  addTask,
  addTaskFailure,
  addTaskSuccess,
  deleteTask,
  deleteTaskFailure,
  deleteTaskSuccess,
  getTasks,
} from "../redux/actions/taskActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { taskService } from "../services/apiService";
import { toast } from "react-toastify";
import Heading from "../components/Heading";

interface Task {
  id: number;
  title: string;
  description: string;
  created_at: string;
}

const Home = () => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenTaskModal, setIsOpenTaskModal] = useState(false);
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [onEditState, setOnEditState] = useState(false);
  const [taskId, setOnTaskId] = useState<number>();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formValues = {
    title: "",
    description: "",
  };

  useEffect(() => {
    getTaskApi();
  }, []);

  useEffect(() => {
    console.log("taskId----", taskId);
  }, [taskId]);

  const getTaskApi = async () => {
    dispatch(getTasks());
    const response = await taskService.getTasksApi();
    setTaskList(response?.data?.tasks);
    dispatch(deleteTaskSuccess(response));
    navigate("/");
  };

  const handleDelete = async (id: number) => {
    // deine delete functionality

    dispatch(deleteTask());
    try {
      // Make API call using Axios
      const response = await taskService.deleteTaskApi("1");
      console.log(response);
      dispatch(deleteTaskSuccess(response));
      navigate("/");
    } catch (error: any) {
      dispatch(deleteTaskFailure(error.message));
    }
  };

  const openisOpenDeleteModal = () => {
    setIsOpenDeleteModal(true);
  };

  const showTaskModal = (isEdit: boolean, id?: number) => {
    setIsOpenTaskModal(true);
    setOnTaskId(id);
    setOnEditState(isEdit);
  };

  const onSubmitForm = async (
    values: { [key: string]: string },
    { resetForm }: any
  ) => {
    dispatch(addTask());
    const task = {
      title: values.title,
      description: values.description,
    };
    try {
      const response = await taskService.addTaskApi(task);
      if (response.success) {
        dispatch(addTaskSuccess(response.data));
        getTaskApi();
        toast.success(`${response.data.message}`);
        navigate("/");
        setIsOpenTaskModal(false);
        resetForm();
      }
    } catch (error: any) {
      dispatch(addTaskFailure(error.message));
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-between items-center w-full py-5">
        <Heading title="All Tasks" className="" />
        <button
          className=" px-4 py-2 text-white bg-[#01172c] rounded-md"
          onClick={() => showTaskModal(false)}
        >
          + Add Task
        </button>
      </div>
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-wrap gap-5 items-center">
          {taskList?.length === 0 ? (
            <Loader />
          ) : (
            taskList.map((task) => (
              <TaskListCard
                id={task?.id}
                key={task?.id}
                title={task?.title}
                description={task?.description}
                dueDate={task?.created_at}
                isOpenDeleteModal={openisOpenDeleteModal}
                showTaskModal={showTaskModal}
              />
            ))
          )}
        </div>
      </div>
      <DeleteModal
        isOpen={isOpenDeleteModal}
        onCancel={() => setIsOpenDeleteModal(false)}
        onDelete={handleDelete}
      />
      <AddTaskModal
        isOpen={isOpenTaskModal}
        onCancel={() => setIsOpenTaskModal(false)}
        onSubmitForm={onSubmitForm}
        formValues={formValues}
        addTaskValidationSchema={addTaskValidationSchema}
        addTaskFields={addTaskFields}
        onEdit={onEditState}
      />
    </div>
  );
};

export default Home;
