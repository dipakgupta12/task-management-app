// TaskListCard.tsx
import React from "react";

interface TaskListCardProps {
  title: string;
  description: string;
  dueDate: string;
  isOpenDeleteModal: () => void;
  showTaskModal: () => void;
}

const TaskListCard: React.FC<TaskListCardProps> = ({
  title,
  description,
  dueDate,
  isOpenDeleteModal,
  showTaskModal
}) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md max-w-md mx-auto mb-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-sm text-gray-400">Due Date: {dueDate}</p>
      {/* Add additional details or buttons as needed */}
      <img
        onClick={isOpenDeleteModal}
        className="w-8 h-8 cursor-pointer"
        alt="delete"
        src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/127-512.png"
      />
      <img
        onClick={showTaskModal}
        className="w-8 h-8 cursor-pointer"
        alt="edit"
        src="https://cdn3.iconfinder.com/data/icons/user-interface-web-1/550/web-circle-circular-round_58-512.png"
      />
    </div>
  );
};

export default TaskListCard;
