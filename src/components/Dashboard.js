import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from './AuthContext';

function Dashboard() {
  const { isLoggedIn } = useAuth();

  return (
    isLoggedIn ? (
      <div className='min-h-screen w-full bg-gray-600'>
        <div className='max-w-xl mx-auto p-4 sm:p-6'>
          <div className='overflow-x-auto'>
            <table className='table-auto w-full text-left'>
              <thead className='bg-gray-900 text-white text-lg'>
                <tr>
                  <th className='p-2 sm:p-4 md:p-6'>Post Name</th>
                  <th className='p-2 sm:p-4 md:p-6'>Content</th>
                  <th className='p-2 sm:p-4 md:p-6'>Edit</th>
                  <th className='p-2 sm:p-4 md:p-6'>Delete</th>
                </tr>
              </thead>
              <tbody className='bg-gray-700'>
                <tr>
                  <td className='p-2 sm:p-4 md:p-6'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                  <td className='p-2 sm:p-4 md:p-6'>Malcolm Lockyer</td>
                  <td className='p-2 sm:p-4 md:p-6 text-green-600 hover:underline cursor-pointer'>
                    <Link to="/updatepost">Edit</Link>
                  </td>
                  <td className='p-2 sm:p-4 md:p-6 text-red-400 hover:underline cursor-pointer'>Delete</td>
                </tr>
                <tr>
                  <td className='p-2 sm:p-4 md:p-6'>Witchy Woman</td>
                  <td className='p-2 sm:p-4 md:p-6'>The Eagles</td>
                  <td className='p-2 sm:p-4 md:p-6 text-green-600 hover:underline cursor-pointer'>
                    <Link to="/updatepost">Edit</Link>
                  </td>
                  <td className='p-2 sm:p-4 md:p-6 text-red-400 hover:underline cursor-pointer'>Delete</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>

        <div className='flex items-center justify-center mt-10'>
          <Link to="/createpost">
            <button className="bg-transparent hover:bg-blue-300 text-blue-50 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
              Create a post
            </button>
          </Link>
        </div>
      </div>
    ) : (
      <div className='min-h-screen w-full bg-gray-600 text-white text-center'>
        <p className='mt-20 text-2xl'>You need to log in to view the dashboard.</p>
      </div>
    )
  );
}

export default Dashboard;
