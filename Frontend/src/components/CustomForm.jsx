import React from "react";
import CustomButton from "./CustomeButton";

const CustomForm = ({
  name,
  setName,
  email,
  setEmail,
  organization,
  setOrganization,
  role,
  setRole,
  handleSubmit,
  btnTitle,
  onClick,
  disabled,
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <span className="text-gray-700">Name:</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>
      <label className="block">
        <span className="text-gray-700">Email:</span>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          disabled={disabled}
          className={`mt-1 block w-full rounded-md shadow-sm focus:ring-opacity-50 ${
            disabled
              ? "bg-gray-200 border-gray-300 text-gray-500 cursor-not-allowed"
              : "border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200"
          }`}
        />
      </label>
      <label className="block">
        <span className="text-gray-700">Organization:</span>
        <input
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>
      <label className="block">
        <span className="text-gray-700">Role:</span>
        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
        />
      </label>
      <CustomButton btnTitle={btnTitle} onClick={onClick} className="w-full" />
    </form>
  );
};

export default CustomForm;
