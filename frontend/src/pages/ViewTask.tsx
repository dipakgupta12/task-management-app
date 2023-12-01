import React from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../components/Button/Button';
import { buttonType } from '../utils/constants';

const ViewTask = () => {
    const { pathname } = useLocation();
    console.log(pathname);
  return (
    <>
      <div className="max-w-[1200px] mx-auto block mt-10 shadow-md border boder-gray-400 rounded-2xl overflow-hidden min-h-[70vh]">
        <div className="w-100">
          <h3 className="text-3xl text-black font-bold w-100 border-b border-gray-300 pb-3 p-3 bg-gray-100 flex justify-between items-center">
            <div className='flex gap-2 items-center'>
              <img src='https://cdn.icon-icons.com/icons2/1123/PNG/512/backbuttoncircle_79559.png' className='w-8 h-8'></img>
            <span>Task1</span>{" "}

            </div>
            <span className="text-sm text-gray-400">
              <strong className="text-black">Created :</strong> 30/11/23
            </span>
          </h3>
          <p className="text-md text-gray-600-400 p-4">need more d</p>
        </div>
      </div>
    </>
  );
}

export default ViewTask