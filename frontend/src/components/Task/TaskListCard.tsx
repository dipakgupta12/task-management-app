// TaskListCard.tsx
import React from "react";
import { timeConverter, toTitleCase, truncateText } from "../../utils";
import { allImages } from "../../utils/constants";

interface TaskListCardProps {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  isOpenDeleteModal: () => void;
  showTaskModal: (isEdit: boolean, id: number) => void;
}

const TaskListCard: React.FC<TaskListCardProps> = ({
  id,
  title,
  description,
  dueDate,
  isOpenDeleteModal,
  showTaskModal,
}) => {
  return (
    <div className="bg-white relative w-[23.5%] h-[200px] p-4 shadow-lg  rounded-lg border border-gray-100 mb-4">
      <h3 className="text-lg font-semibold mb-2">{toTitleCase(title)}</h3>
      <p className="text-gray-600 text-md mb-2">
        {truncateText(description, 100)}
      </p>
      <p className="text-sm text-gray-400 absolute bottom-4 left-3">
        <span className="font-semibold text-black">Task created : </span>
        {timeConverter(dueDate)}
      </p>
      <div className="absolute bottom-4 right-5 flex gap-3">
        <img
          onClick={isOpenDeleteModal}
          className="w-6 h-6 cursor-pointer"
          alt="delete"
          src={allImages.deleteIcon}
        />
        <img
          onClick={() => showTaskModal(true, id)}
          className="w-7 cursor-pointer"
          alt="edit"
          src={allImages.editIcon}
        />
      </div>
    </div>
  );
};

export default TaskListCard;
