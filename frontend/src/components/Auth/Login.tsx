// Example usage

import React, { useEffect } from "react";
import CommonForm from "../Form/Form";
import { loginFields, loginValidationSchema } from "./constants";
import Heading from "../Heading";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
} from "../../redux/actions/userActions";

import { authService } from "../../services/apiService";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: any) => state.isAuthenticated);
  const isUserAuthenticated = localStorage.getItem("user") !== null;

  const formValues = {
    email: "",
    password: "",
  };

  useEffect(() => {
    // If the user is already authenticated, redirect them to the home page
    
    if (isAuthenticated || isUserAuthenticated) {
      console.log("====");
      navigate("/");
    }
  }, [isAuthenticated, isUserAuthenticated, navigate]);

  const onSubmitForm = async (values: { [key: string]: string }) => {
    dispatch(loginRequest());
    try {
      // Make API call using Axios
      const response = await authService.login(values.email, values.password);
      console.log(response);
      dispatch(loginSuccess(response));
      localStorage.setItem("user", JSON.stringify(response));
      navigate("/");
    } catch (error: any) {
      dispatch(loginFailure(error.message));
    }
  };

  return (
    <div className="flex items-center justify-center py-6">
      <div className="bg-gray-50 rounded-md p-6 rounded shadow-md w-60">
        <Heading title="Welcome back" className="text-center mb-5" />
        <CommonForm
          initialValues={formValues}
          validationSchema={loginValidationSchema}
          onSubmit={onSubmitForm}
          inputFields={loginFields}
          formStyle="flex flex-col"
          buttonText="Login"
          buttonStyle="bg-blue-300  py-2 border-blue-500"
        />
      </div>
    </div>
  );
};

export default LoginPage;
