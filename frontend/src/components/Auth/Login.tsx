// Example usage

import React from "react";
import CommonForm from "../Form/Form";
import { loginFields, loginValidationSchema } from "./constants";
import Heading from "../Heading";

import { login } from "../../redux/actions/userActions";

const LoginPage: React.FC = () => {
  const formValues = {
    email: "",
    password: "",
  };

  const onSubmitForm = (values: { [key: string]: string }) => {
    console.log('=========', values.email, values.password)
    login(values.email, values.password);
   
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
