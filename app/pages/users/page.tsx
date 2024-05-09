"use client";

import { getUsers } from "@/app/lib/actions/blogs";
import React, { useEffect, useState } from "react";
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { IoClose, IoTrash } from "react-icons/io5";

// Buat komponen modal terpisah
const Modal: React.FC<{ title: string; onClose: () => void; formData: any; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({
  title,
  onClose,
  formData,
  onChange,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow dark:bg-gray-700 lg:w-6/12 md:w-9/12 w-11/12 p-4 text-white">
        <div className="flex justify-end">
          <button onClick={onClose}>
          <IoClose size={20} color="white" />
          </button>
        </div>
        <div className="flex justify-center mb-2">
          <h2 className="text-xl font-bold">Form {title}</h2>
        </div>
        <div className="relative w-full lg:px-8">
          <div className="">
            <form className="">
              <div className="grid gap-4 mb-8 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type product name"
                    required
                    value={formData.name}
                    onChange={onChange}
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type your full name"
                    required
                    value={formData.username}
                    onChange={onChange}
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="e.g yourmail11@mail.example"
                    required
                    value={formData.email}
                    onChange={onChange}
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="website"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Website
                  </label>
                  <input
                    type="text"
                    name="website"
                    id="website"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="e.g www.yourcompany.org"
                    required
                    value={formData.website}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="flex flex-row justify-around md:justify-between lg:justify-between">
              <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 min-w-28 md:min-w-52 lg:m-w-28 justify-center"
              >
                Save
              </button>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-grey-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-grey-800 min-w-28 md:min-w-52 lg:m-w-28 justify-center"
              >
                Cancel
              </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const Users = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("New User");
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    website: "",
  });

  useEffect(() => {
    getUsers()
      .then((data: any) => {
        if (data.error) {
          console.error(data.error);
        } else {
          setUsers(data);
        }
      })
      .catch((error: any) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateUser = () => {
    setModalTitle("New User");
    setShowModal(true);
    setSelectedUser(null);
  };

  const handleEditUser = (user: any) => {
    setModalTitle("Edit User");
    setShowModal(true);
    setSelectedUser(user);
    setFormData({
      name: user.name,
      username: user.username,
      email: user.email,
      website: user.website,
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  

  return (
    <div>
      <h1 className="font-bold text-2xl my-4">Users</h1>
      <div className="flex w-full justify-end my-3">
        <button
          type="submit"
          onClick={handleCreateUser}
          className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex flex-row gap-x-2"
        >
          <FaPlus size={15} color="white" />
          Create new user
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md rounded-lg">
        <table className="w-full text-xs md:text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                Nama User
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Website
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any, index: number) => {
              return (
                <tr
                  key={user.id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {user.name}
                  </td>
                  <td className="px-6 py-4">{user.username}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.website}</td>
                  <td className="px-6 py-4 flex flex-row gap-x-2 md:gap-x-3">
                    <a
                      href="#"
                      onClick={() => handleEditUser(user)}
                      className="font-medium text-white-600 dark:text-blue-500 bg-blue-700 p-2 rounded-lg flex items-center justify-center"
                    >
                      <FaPencilAlt size={15} color="#fff" />
                    </a>
                    <a
                      href="#"
                      className="font-medium text-white-600 dark:text-blue-500 bg-red-800 p-2 rounded-lg flex items-center justify-center"
                    >
                      <IoTrash size={15} color="white" />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        {showModal && (
          <Modal title={modalTitle} onClose={handleCloseModal} formData={formData} onChange={handleChange} />
        )}
      </div>
    </div>
  );
};

export default Users;
