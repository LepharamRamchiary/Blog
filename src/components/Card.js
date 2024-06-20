import React from 'react';
import { Link } from "react-router-dom"

function Card({ title, content }) {
  return (
    <Link to={`/postdetails/${encodeURIComponent(title)}`} className='flex flex-col'>
      <div className='flex flex-col border border-gray-500 p-6 mt-5'>
        <div className='flex items-center text-lg font-semibold gap-3 text-gray-950'>
          <p>{title}</p>
        </div>
        <div className='flex items-center gap-3 text-gray-50 '>
          <p>{content}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
