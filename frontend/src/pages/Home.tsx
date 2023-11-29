import React, { useState } from "react";
import TaskListCard from "../components/Task/TaskListCard";
import Loader from "../components/Loader/Loader";
import DeleteModal from "../components/DeleteModal";
import AddTaskModal from "../components/AddTaskModal";

const Home = () => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenTaskModal, setIsOpenTaskModal] = useState(false);

  const handleDelete = (id: number) => {
    // deine delete functionality
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
    // Add more tasks as needed
  ];
  return (
    <div>
      <div className="flex justify-between items-center w-full p-5">
        <h2 className="text-2xl font-semibold mb-4">Your Task List</h2>
        <button
          className=" px-4 py-2 text-white bg-blue-500 rounded-md"
          onClick={showTaskModal}
        >
          + Add Task
        </button>
      </div>
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
      <DeleteModal
        isOpen={isOpenDeleteModal}
        onCancel={() => setIsOpenDeleteModal(false)}
        onDelete={handleDelete}
      />
      <AddTaskModal
        isOpen={isOpenTaskModal}
        onCancel={() => setIsOpenTaskModal(false)}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
