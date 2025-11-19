import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllUsers } from '../../../redux/userSlice';
import { IoMdArrowBack } from "react-icons/io";
import { set } from 'react-hook-form';
const UsersTable = ({ isOpen, setIsOpen }) => {

  const { allUsers, loggedUser } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const userRole = loggedUser?.user?.role;
  useEffect(() => {
    if (userRole == 'admin') {
      dispatch(fetchAllUsers());
    }



    console.log("Fetching all users for admin", allUsers, userRole);

  }, [dispatch, loggedUser])

  return (
    <>
      {isOpen && (

        <div className="min-h-screen bg-gray-50 p-6">
          <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-2xl p-6">
            <div className=' flex justify-between w-full items-center'>
              <div className='flex '>
                
                <h2 className="text-2xl font-bold text-gray-800 mb-4">All Users</h2>
              </div>
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className='px-6 py-2 rounded-lg border-none text-white bg-red-500 active:scale-90 duration-300 transition-all'>Close</button>
            </div>

            <div className="overflow-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="px-6 py-3 font-semibold text-gray-700">Sr no.</th>
                    <th className="px-6 py-3 font-semibold text-gray-700">Name</th>
                    <th className="px-6 py-3 font-semibold text-gray-700">Email</th>
                    <th className="px-6 py-3 font-semibold text-gray-700">Password</th>
                    <th className="px-6 py-3 font-semibold text-gray-700">Phone</th>
                    <th className="px-6 py-3 font-semibold text-gray-700">Gender</th>
                    {/* Add more headers later */}
                  </tr>
                </thead>
                <tbody>
                  {allUsers?.length > 0 ? (
                    allUsers.map((user, index) => (
                      <motion.tr
                        key={user.id || index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="border-b hover:bg-blue-50 transition-colors"
                      >
                        <td className="px-6 py-4">{index + 1}</td>
                        <td className="px-6 py-4">{user.name || user.fullname}</td>
                        <td className="px-6 py-4">{user.email}</td>
                        <td className="px-6 py-4">{user.password}</td>
                        <td className="px-6 py-4">{user.phone || "-"}</td>
                        <td className="px-6 py-4">{user.gender || "-"}</td>
                        {/* Add more columns later */}
                      </motion.tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="text-center py-6 text-gray-500">
                        No users found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UsersTable;
