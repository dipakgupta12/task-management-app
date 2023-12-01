import React from 'react'
import Button from '../components/Button/Button';
import { allImages, buttonType } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../utils';

export const Profile = () => {
  const navigate = useNavigate();
  return (
    <div className="w-1/2 shadow-lg border border-gray-100 min-h-[85vh] rounded-lg mx-auto my-10 p-5 justify-center flex flex-col items-center">
      <img src={allImages.userLogo} className="w-24" alt="profile" />
      <p className="w-full text-center text-lg mt-4 font-bold text-blue-800">
        {getUser()?.user?.name}
      </p>
      <p className="w-full text-center text-gray-400">
        {getUser()?.user?.email}
      </p>
      <Button
        className={`${buttonType.primary} my-10 w-48 !mx-0`}
        onClick={() => navigate("/")}
      >
        View all task
      </Button>
    </div>
  );
}
