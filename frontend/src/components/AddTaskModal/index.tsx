import React from "react";
import CommonForm from "../Form/Form";
import Heading from "../Heading";

interface DeleteModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onSubmitForm: any;
  formValues: {};
  addTaskValidationSchema?: any;
  addTaskFields: any;
  onEdit: boolean
}

const AddTaskModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onCancel,
  formValues,
  addTaskValidationSchema,
  addTaskFields,
  onSubmitForm,
  onEdit
}) => {

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
      <div className="relative bg-white rounded-lg p-8 w-96">
        <Heading title={!onEdit ? "Add Task" : "Edit task"} />
        <CommonForm
          initialValues={formValues}
          validationSchema={addTaskValidationSchema}
          onSubmit={onSubmitForm}
          inputFields={addTaskFields}
          formStyle="flex flex-col"
          buttonText="Add"
          buttonStyle="bg-blue-300  py-2 border-blue-500"
        />
        <div className="mt-6 flex justify-end w-full">
          <button
            className="px-4 w-full rounded-full py-2 text-gray-600 border border-gray-300 hover:border-gray-400"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
