import React, { useState } from "react";
import TaskListCard from "../components/Task/TaskListCard";
import Loader from "../components/Loader/Loader";
import DeleteModal from "../components/DeleteModal";
import AddTaskModal from "../components/AddTaskModal";
import {
  addTaskFields,
  addTaskValidationSchema,
} from "../components/Auth/constants";
import { deleteTask, deleteTaskFailure, deleteTaskSuccess } from "../redux/actions/taskActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { taskService } from "../services/apiService";

const Home = () => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenTaskModal, setIsOpenTaskModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formValues = {
    email: "",
    password: "",
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

  const showTaskModal = () => {
    setIsOpenTaskModal(true);
  };

  const tasks = [
    {
      id: 1,
      title: "Task 1",
      description: "Description 1",
      dueDate: "2023-12-01",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description 2",
      dueDate: "2023-12-15",
    },  
  ];

  const onSubmitForm = () => {
    console.log('=====')
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-between items-center w-full py-5">
        <h2 className="text-2xl font-semibold text-[#01172c] mb-4">Your Task List</h2>
        <button
          className=" px-4 py-2 text-white bg-[#01172c] rounded-md"
          onClick={showTaskModal}
        >
          + Add Task
        </button>
      </div>
<div className="max-w-[1240px] mx-auto">

<div className="flex flex-wrap gap-5 items-center">
      {tasks.length === 0 ? (
        <Loader />
      ) : (
        tasks.map((task) => (
            <TaskListCard
            key={task.id}
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
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
        onDelete={handleDelete}
        formValues={formValues}
        addTaskValidationSchema={addTaskValidationSchema}
        onSubmitForm={onSubmitForm}
        addTaskFields={addTaskFields}
      />
    </div>
  );
};

export default Home;
