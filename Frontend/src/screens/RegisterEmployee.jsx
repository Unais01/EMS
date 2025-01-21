import React, { useState } from "react";
import { Header, CustomForm } from "../components";
const RegisterEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [role, setRole] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const url = `https://simple-ems.onrender.com/api/employees`;
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, organization, role }),
    })
      .then((resp) => resp.json())
      .then(() => {
        setName("");
        setEmail("");
        setOrganization("");
        setRole("");
        setSuccessMessage("Employee added successfully!");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      });
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-8">
        <h2 className="text-3xl font-bold mb-6">Register</h2>
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          {successMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              {successMessage}
            </div>
          )}
          <CustomForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            organization={organization}
            setOrganization={setOrganization}
            role={role}
            setRole={setRole}
            handleSubmit={handleSubmit}
            btnTitle="Add Employee"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterEmployee;
