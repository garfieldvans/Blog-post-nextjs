"use client";

import { getUsers } from "@/app/lib/actions/blogs";
import React, { useEffect, useState } from "react";
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoClose, IoTrash } from "react-icons/io5";

const Modal: React.FC<{
  title: string;
  onClose: () => void;
  formData: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ title, onClose, formData, onChange }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-slate-800 rounded-lg shadow xl:w-5/12 md:w-9/12 w-11/12 p-4 text-white">
        <div className="flex justify-end font-bold text-white text-lg">
          <button onClick={onClose}>
            <IoClose size={30} />
          </button>
        </div>
        <div className="flex justify-center mb-2">
          <h2 className="text-xl font-bold">Form {title}</h2>
        </div>
        <div className="relative w-full lg:px-8">
          <div className="">
            <form className="">
              <div className="grid gap-6 mb-8 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-100 "
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-slate-700 border border-slate-600 text-slate-200 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Type product name"
                    required
                    value={formData.name}
                    onChange={onChange}
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-100"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="bg-slate-700 border border-slate-600 text-slate-200 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Type your full name"
                    required
                    value={formData.username}
                    onChange={onChange}
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-100"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-slate-700 border border-slate-600 text-slate-200 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="e.g yourmail11@mail.example"
                    required
                    value={formData.email}
                    onChange={onChange}
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="website"
                    className="block mb-2 text-sm font-medium text-gray-100"
                  >
                    Website
                  </label>
                  <input
                    type="text"
                    name="website"
                    id="website"
                    className="bg-slate-700 border border-slate-600 text-slate-200 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="e.g www.yourcompany.org"
                    required
                    value={formData.website}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="flex flex-row justify-around md:justify-between lg:justify-between md:mt-14">
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center min-w-28 md:min-w-52 lg:m-w-28 justify-center"
                >
                  Save
                </button>
                <button
                  onClick={onClose}
                  className="text-white inline-flex items-center bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-grey-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center min-w-28 md:min-w-52 lg:m-w-28 justify-center"
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
    setFormData({
      name: "",
      username: "",
      email: "",
      website: "",
    });
  };

  return (
    <div>
      <h1 className="font-bold text-2xl mt-6">Users</h1>
      <div className="flex w-full justify-between flex-row gap-x-3 my-3">
        <button
          type="submit"
          onClick={handleCreateUser}
          className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center flex flex-row gap-x-2"
        >
          <FaPlus size={15} />
          <h2 className="hidden md:block">Create new user</h2>
        </button>

        <form className=" min-w-40 md:min-w-80 lg:min-w-96 text-slate-600 ps-4 md:ps-0 rounded-lg ">
          <div className="flex border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
            <div className=" items-center ps-3 pointer-events-none hidden md:flex">
              <HiMagnifyingGlass size={20} />
            </div>
            <input
              type="search"
              id="default-search"
              className="block ps-2 w-full p-2 ml-2 sm:ml-0 text-sm text-gray-900 focus:outline-none focus:ring-0"
              placeholder="Search Users..."
              required
            />
            <button
              type="submit"
              className="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg text-sm px-4 py-2"
            >
              <HiMagnifyingGlass size={20} className="md:hidden" />
              <h2 className="hidden md:block">Search</h2>
            </button>
          </div>
        </form>
      </div>
      <div className="relative overflow-x-auto shadow-md rounded-lg ">
        <table className="w-full text-xs md:text-sm text-left rtl:text-right text-slate-300 bg-slate-900">
          <thead className="text-xs uppercase bg-slate-600 ">
            <tr>
              <th scope="col" className="flex items-center justify-center p-3">
                No.
              </th>
              <th scope="col" className="p-3">
                Nama User
              </th>
              <th scope="col" className="p-3">
                Username
              </th>
              <th scope="col" className="p-3">
                Email
              </th>
              <th scope="col" className="p-3">
                Website
              </th>
              <th scope="col" className="p-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any, index: number) => {
              return (
                <tr
                  key={user.id}
                  className="odd:bg-grey-800 even:bg-slate-800 border-b "
                >
                  <td className="flex items-center justify-center">
                    {index + 1}
                  </td>
                  <td
                    scope="row"
                    className="px-2 py-2 md:px-6 md:py-4 font-medium whitespace-nowrap "
                  >
                    {user.name}
                  </td>
                  <td className="px-2 py-2 md:px-6 md:py-4">{user.username}</td>
                  <td className="px-2 py-2 md:px-6 md:py-4">{user.email}</td>
                  <td className="px-2 py-2 md:px-6 md:py-4">{user.website}</td>
                  <td className="px-2 py-2 md:px-6 md:py-4 flex flex-row gap-x-2 md:gap-x-3">
                    <a
                      href="#"
                      onClick={() => handleEditUser(user)}
                      className="font-medium text-white-600 bg-blue-700 p-2 rounded-lg flex items-center justify-center"
                    >
                      <FaPencilAlt size={15} color="#fff" />
                    </a>
                    <a
                      href="#"
                      className="font-medium text-white-600 bg-red-800 p-2 rounded-lg flex items-center justify-center"
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
      <div className="flex items-center mt-1 w-full justify-center gap-x-1">
            <button className="flex items-center justify-center px-8 h-8 md:h-10 text-sm md:text-base font-medium text-white bg-slate-800 rounded-s-lg hover:bg-slate-900 ">
              Prev
            </button>
            <button className="flex items-center justify-center px-8 h-8 md:h-10 text-sm md:text-base font-medium text-white bg-slate-800 rounded-e-lg hover:bg-slate-900">
              Next
            </button>
        </div>
      </div>
      <div>
        {showModal && (
          <Modal
            title={modalTitle}
            onClose={handleCloseModal}
            formData={formData}
            onChange={handleChange}
          />
        )}
      </div>
    </div>
  );
};

export default Users;
