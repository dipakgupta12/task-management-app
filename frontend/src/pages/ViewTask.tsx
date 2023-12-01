import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import Heading from '../components/Heading';
import { taskService } from '../services/apiService';
import { timeConverter, toTitleCase } from '../utils';

interface TaskDetails {
  title: string;
  description: string;
  created_at: string;
}

const ViewTask = () => {
  const navigate = useNavigate();
  const { taskId } = useParams();
  const [taskDetails, setTaskDetails] = useState<TaskDetails>();

  useEffect(() => {
    const getTask = async () => {
      try {
        const res = await taskService.getTaskDetails(Number(taskId));
        setTaskDetails(res.data.task);
      } catch (error) {
        console.error("Error fetching task details:", error);
      }
    };

    getTask();
  }, [taskId]);

  return (
    <>
      <div className="max-w-[1200px] mx-auto block mt-10 shadow-md border boder-gray-400 rounded-2xl overflow-hidden min-h-[80vh]">
        <div className="w-100">
          <h3 className="text-3xl text-black font-bold w-100 border-b border-gray-300 pb-3 p-3 bg-gray-100 flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <img
                onClick={() => navigate("/")}
                src="https://cdn.icon-icons.com/icons2/1123/PNG/512/backbuttoncircle_79559.png"
                alt="back-button"
                className="w-8 h-8 cursor-pointer"
              ></img>
            </div>
            <span className="text-sm text-gray-400">
              <strong className="text-black">Created : </strong>
              {timeConverter(`${taskDetails?.created_at}`)}
            </span>
          </h3>
          <Heading
            title={`${toTitleCase(`${taskDetails?.title}`)}`}
            className="p-4"
          />
          <p className="text-md text-gray-600-400 px-4">
            {taskDetails?.description}
          </p>
        </div>
      </div>
    </>
  );
}

export default ViewTask