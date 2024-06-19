import React from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function UpdatePost() {
  return (
    <div className='bg-gray-900 min-h-screen w-full'>
      <div className='text-center'>
        <h1 className='text-2xl font-semibold p-8 text-white'>Update Post</h1>
      </div>
      <div className='max-w-2xl mx-auto p-6 '>
        <input placeholder='Title' className='bg-transparent w-auto p-2 text-white border italic' />
      </div>
      <div className='max-w-2xl mx-auto p-6'>
        <ReactQuill
          placeholder="Write Something..."
          className="h-72 mb-12 text-white"
          required
        />
      </div>
      <div className='text-center'>
        <button className="mt-4 sm:mt-0 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          type="submit">Update</button>
      </div>

    </div>
  )
}

export default UpdatePost