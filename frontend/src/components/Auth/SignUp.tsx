import React, { useState } from "react";
import Heading from "../Heading";
import CommonForm from "../Form/Form";
import { signUpFields, signupValidationSchema } from "./constants";

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const onSubmitForm = (values: { [key: string]: string }) => {
    console.log(values);
    // setFormValues(values);
  };
  return (
    <div className="flex items-center justify-center py-6">
      <div className="bg-gray-50 rounded-md p-6 rounded shadow-md w-60">
        <Heading title="Sign up" className="text-center mb-5" />
        <CommonForm
          initialValues={formValues}
          validationSchema={signupValidationSchema}
          onSubmit={onSubmitForm}
          inputFields={signUpFields}
          formStyle="flex flex-col"
          buttonText="Sign up"
          buttonStyle="bg-blue-300  py-2 border-blue-500"
        />
      </div>
    </div>
  );
};

export default SignUp;
