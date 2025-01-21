import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Header } from "../components";
const EmployeesList = () => {
  const [data, setData] = useState([]);
  const [deleteSuccessMessage, setDeleteSuccessMessage] = useState("");

  const url = `https://ems-zxud.onrender.com/api/employees`;

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setData(data.employees));

    if (localStorage.getItem("deleteSuccess") === "true") {
      setDeleteSuccessMessage("Employee deleted successfully!");
      localStorage.removeItem("deleteSuccess");
    }
  }, []);

  useEffect(() => {
    if (deleteSuccessMessage) {
      const timer = setTimeout(() => {
        setDeleteSuccessMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [deleteSuccessMessage]);

  const handleDelete = (id) => {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => {
        setData((prev) => prev.filter((emp) => emp._id !== id));
        localStorage.setItem("deleteSuccess", "true");
        window.location.reload();
      });
  };

  const handleUpdate = (id) => {
    window.location.href = `/update/${id}`;
  };

  return (
    <div>

      <Header />
      <div className="container mx-auto py-8">
        {deleteSuccessMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {deleteSuccessMessage}
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Organization
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((emp) => {
                const { _id, email, name, organization: org, role } = emp;
                return (
                  <tr key={_id} className="hover:bg-gray-100">
                    <td className="py-4 px-6">{email}</td>
                    <td className="py-4 px-6">{name}</td>
                    <td className="py-4 px-6">{org}</td>
                    <td className="py-4 px-6">{role}</td>
                    <td className="py-4 px-6 flex space-x-2">
                      <FaTrash
                        onClick={() => handleDelete(_id)}
                        className="text-red-500 cursor-pointer hover:text-red-700"
                      />
                      <FaEdit
                        onClick={() => handleUpdate(_id)}
                        className="text-blue-500 cursor-pointer hover:text-blue-700"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeesList;
