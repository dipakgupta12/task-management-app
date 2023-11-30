// TaskListCard.tsx
import React from "react";

interface TaskListCardProps {
  id: number
  title: string;
  description: string;
  dueDate: string;
  isOpenDeleteModal: () => void;
  showTaskModal: (isEdit:boolean, id: number) => void;
}

const TaskListCard: React.FC<TaskListCardProps> = ({
  id,
  title,
  description,
  dueDate,
  isOpenDeleteModal,
  showTaskModal
}) => {
  return (

    <div className="bg-white relative w-[23.5%] h-[150px] p-4 shadow-lg  rounded-lg border border-gray-100 mb-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-sm text-gray-400">Due Date: {dueDate}</p>
      {/* Add additional details or buttons as needed */}
      <div className="absolute bottom-5 right-5 flex gap-5">
        
      <img
        onClick={isOpenDeleteModal}
        className="w-5 h-5 cursor-pointer"
        alt="delete"
        src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
      />
      <img
        onClick={() => showTaskModal(true, id)}
        className="w-5 h-5 cursor-pointer"
        alt="edit"
        src="https://icon-library.com/images/edit-icon-images/edit-icon-images-26.jpg"
      />

      </div>
    </div>
  );
};

export default TaskListCard;
